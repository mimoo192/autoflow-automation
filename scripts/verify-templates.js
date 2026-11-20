#!/usr/bin/env node
/**
 * Verify n8n workflow templates are valid JSON and have required structure
 * Run: node scripts/verify-templates.js
 */

const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const REQUIRED_FIELDS = ['name', 'nodes', 'connections', 'active', 'settings', 'meta', 'id'];

function verifyTemplate(filePath, fileName) {
  const errors = [];
  const warnings = [];

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const workflow = JSON.parse(content);

    // Check required fields
    for (const field of REQUIRED_FIELDS) {
      if (!workflow.hasOwnProperty(field)) {
        errors.push(`Missing required field: ${field}`);
      }
    }

    // Check nodes array
    if (workflow.nodes && Array.isArray(workflow.nodes)) {
      if (workflow.nodes.length === 0) {
        warnings.push('Workflow has no nodes');
      } else {
        // Check each node has required properties
        workflow.nodes.forEach((node, idx) => {
          if (!node.id) errors.push(`Node ${idx}: missing id`);
          if (!node.name) errors.push(`Node ${idx}: missing name`);
          if (!node.type) errors.push(`Node ${idx}: missing type`);
          if (!node.position || !Array.isArray(node.position)) {
            warnings.push(`Node ${idx} (${node.name}): missing position`);
          }
        });
      }
    } else {
      errors.push('Missing or invalid nodes array');
    }

    // Check connections
    if (workflow.connections && typeof workflow.connections === 'object') {
      const connectionKeys = Object.keys(workflow.connections);
      if (connectionKeys.length === 0) {
        warnings.push('No connections defined');
      }
    } else {
      errors.push('Missing or invalid connections object');
    }

    // Check for placeholder credentials (good practice)
    let hasPlaceholderCreds = false;
    if (workflow.nodes) {
      workflow.nodes.forEach(node => {
        if (node.credentials) {
          Object.values(node.credentials).forEach(cred => {
            if (typeof cred === 'string' && cred.includes('your-')) {
              hasPlaceholderCreds = true;
            }
          });
        }
      });
    }
    if (hasPlaceholderCreds) {
      warnings.push('Contains placeholder credential names (expected - user must configure)');
    }

    return { errors, warnings, nodeCount: workflow.nodes?.length || 0 };
  } catch (e) {
    return { errors: [`Invalid JSON: ${e.message}`], warnings: [], nodeCount: 0 };
  }
}

function main() {
  console.log('🔍 Verifying n8n workflow templates...\n');

  const files = fs.readdirSync(TEMPLATES_DIR)
    .filter(f => f.endsWith('.json'))
    .sort();

  if (files.length === 0) {
    console.log('❌ No JSON template files found in templates/');
    process.exit(1);
  }

  let allPassed = true;

  for (const file of files) {
    const filePath = path.join(TEMPLATES_DIR, file);
    const { errors, warnings, nodeCount } = verifyTemplate(filePath, file);

    console.log(`📄 ${file}`);
    console.log(`   Nodes: ${nodeCount}`);

    if (errors.length > 0) {
      console.log(`   ❌ Errors:`);
      errors.forEach(e => console.log(`      - ${e}`));
      allPassed = false;
    } else {
      console.log(`   ✅ Valid structure`);
    }

    if (warnings.length > 0) {
      console.log(`   ⚠️  Warnings:`);
      warnings.forEach(w => console.log(`      - ${w}`));
    }
    console.log('');
  }

  console.log('='.repeat(50));
  if (allPassed) {
    console.log('✅ All templates passed verification!');
    process.exit(0);
  } else {
    console.log('❌ Some templates have errors. Fix before publishing.');
    process.exit(1);
  }
}

main();