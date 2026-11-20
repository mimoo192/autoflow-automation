# Shopify + Etsy Digital Product Automation Templates

A pack of 3 production-ready n8n workflow templates for digital product sellers on Shopify and Etsy.

## Templates Included

### 1. `shopify-digital-delivery.json`
**Shopify Order → Automatic Digital Product Delivery**

- Triggers on new Shopify orders (webhook)
- Filters for digital products only (by `fulfillment_service: digital` or `product_type: Digital`)
- Fetches the digital file from Google Drive (organized by product handle)
- Sends branded delivery email with attachment via Gmail
- Moves file to "Delivered" folder in Google Drive for tracking
- Logs success/failure

**Requirements:** Shopify store, Google Drive (files organized as `/digital-products/{handle}.zip`), Gmail account

---

### 2. `etsy-digital-delivery.json`
**Etsy Order → Automatic Digital Product Delivery**

- Polls Etsy API for new paid receipts every 10 minutes
- Filters for digital transactions (`is_digital: true` or `digital_file_id` present)
- Fetches the digital file URL directly from Etsy's API
- Sends branded delivery email with download link via Gmail
- Logs success/failure

**Requirements:** Etsy developer app (API key + OAuth token), Gmail account

---

### 3. `shopify-etsy-unified-crm.json`
**Shopify + Etsy → Unified HubSpot CRM + Smart Review Requests**

- Aggregates new orders from BOTH Shopify (webhook) and Etsy (API polling)
- Creates/updates contacts in HubSpot with unified customer profiles
- Creates deals for each order (stage: Closed Won)
- Adds order notes to contact timeline
- Enriches customer data: tags repeat customers, high-value buyers ($100+), digital vs physical buyers
- **Smart review requests**: Only sends review emails to repeat buyers of PHYSICAL products (digital buyers already got instant delivery)
- Logs completion with tags

**Requirements:** Shopify store, Etsy developer app, HubSpot account, Gmail account

---

## Quick Start

### 1. Import into n8n
```bash
# Option A: n8n Cloud
# Go to Settings → Workflows → Import → Select JSON file

# Option B: Self-hosted n8n
# Copy JSON files to ~/.n8n/workflows/ and restart n8n
```

### 2. Set Up Credentials
Each template requires these credential types (configure once in n8n, then select in each workflow):

| Credential Type | Used By |
|-----------------|---------|
| Shopify API | Templates 1, 3 |
| Google Drive OAuth2 | Template 1 |
| Gmail OAuth2 | All templates |
| HTTP Header Auth (Etsy API) | Templates 2, 3 |
| HubSpot API | Template 3 |

### 3. Configure Your Specifics
Edit these placeholder values in each workflow:
- `yourstore.com` → your actual domain
- `yourshop` → your Etsy shop name
- `noreply@yourstore.com` → your sending email
- Google Drive folder path: `/digital-products/`
- HubSpot pipeline/dealstage if different from defaults

### 4. Activate
Toggle each workflow to **Active** in n8n.

---

## File Organization for Template 1 (Google Drive)

```
Google Drive/
└── digital-products/
    ├── my-ebook.zip
    ├── preset-pack.zip
    ├── template-kit.zip
    └── ... (one .zip per product handle)
```

Product handle = Shopify product handle (lowercase, hyphens). Example: "Ultimate Notion Template" → handle `ultimate-notion-template` → file `ultimate-notion-template.zip`

---

## Pricing & Licensing

- **Personal use**: Use in your own stores freely
- **Resale rights**: Included — you may repackage and sell these templates
- **No attribution required** (but appreciated!)

---

## Support

These are template files — you'll need to configure credentials and test in your environment. For n8n help, see [n8n docs](https://docs.n8n.io/).

---

## Changelog

- **v1.0** (2026-11-20): Initial release — 3 templates for Shopify/Etsy digital product automation