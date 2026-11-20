# Gumroad Launch Checklist

## Pre-Launch Preparation ✅

Everything is ready locally. Here is your step-by-step guide.

---

## Step 1: Download Required Files

From your local folder:
`C:\Users\hp\Desktop\chat\business\niche-ai-automation\`

**Product Files:**
1. `autoflow-templates.zip` (8 KB) — 3 JSON workflows + README
2. `public/index.html` — Landing page (for reference)

**Copy/Paste from Docs:**
3. `docs/gumroad-product-description.md` — Copy the full description
4. `public/images/cover.png` — Will generate this next (or use placeholder)

---

## Step 2: Generate Cover Image (Optional)

If you want a proper cover image (1200x628, dark theme, cyan accent), save this file:

```python
# Generate cover image - run locally or use existing placeholder
from PIL import Image, ImageDraw, ImageFont

img = Image.new('RGB', (1200, 628), color='#0a0f1a')
draw = ImageDraw.Draw(img)

# Background gradient
for x in range(1200):
    r = int(26 + (x/1200) * 10)
    g = int(15 + (x/1200) * 5)
    b = int(42 + (x/1200) * 8)
    draw.line([(x, 0), (x, 628)], fill=(g, b, r))

# Text
draw.text((600, 280), "AutoFlow", fill='#ffffff', embed=True)
draw.text((600, 320), "Shopify + Etsy Automation Templates", fill='#22d3ee', embed=True)

img.save('cover.png')
```

Or just skip the image for now and add later in Gumroad editor.

---

## Step 3: Gumroad Upload Steps

**1. Go to:** https://gumroad.com/products/new

**2. Product Name:**
```
AutoFlow: Shopify + Etsy Digital Product Automation Templates
```

**3. Product Description (COPY/PASTE):**
(See `docs/gumroad-product-description.md` — the long description section)

**4. Price:**
- $49 (one-time)
- Currency: USD

**5. Upload File:**
- Click "Upload a file"
- Select: `autoflow-templates.zip`
- Wait for upload

**6. Tags:**
```
n8n, automation, shopify, etsy, digital-products, workflow, crm, hubspot, no-code, resell-rights, passive-income, ecommerce
```

**7. Category:**
- Business & Marketing

**8. Cover Image:**
- Skip for now (add later in editor)
- OR upload a placeholder 1200x628 image

**9. Public URL Slug:**
```
autoflow-shopify-etsy-templates
```

**10. Click "Publish"**

---

## Step 4: Post-Publish Actions

**Configure Product Page:**
- Add the cover image (1200x628)
- Add short description to Gumroad "Product URL" field

**Test Download:**
- Purchase your own product ($49) to verify download works
- Test extracting the zip file
- Test importing into n8n

**Set Up Refunds:**
- Go to Gumroad → Settings → Refunds
- Enable "30-day money-back guarantee"

---

## Step 5: Share

**Social Links:**
- Landing page: `https://mimoo192.github.io/autoflow-automation/` (GitHub Pages)
- Gumroad: `https://gumroad.com/l/autoflow-shopify-etsy-templates`

**Copy this Twitter thread:**
(See `docs/launch-content.md` — Twitter X section)

---

## Files Summary

| File | Purpose | Location |
|------|---------|----------|
| `autoflow-templates.zip` | Product download | Root of project |
| `public/index.html` | Landing page (GitHub Pages) | Publicly hosted |
| `docs/gumroad-product-description.md` | Full product description to copy | Read before uploading |
| `docs/etsy-listing.md` | Etsy listing copy (future expansion) | For later |
| `docs/launch-content.md` | Social media, email sequences | Marketing content |

---

## Notes

- Gumroad charges 10% + payment processing fees ($0.50 + 3.5% per sale)
- Minimum withdrawal: $10
- Payout schedule: Monthly (15th of each month)
- Product lives forever — you can continue selling without any platform fees beyond Gumroad's cut