# Launch Content Pack: AutoFlow Template Launch

## Twitter/X Thread (Launch Day)

### Tweet 1/8
```
I spent 40+ hours manually sending digital download emails last year.

Every Shopify/Etsy order: check → find file → email → update CRM → repeat.

So I built 3 n8n workflows that do it all automatically.

Now it takes 0 minutes per order. 🧵👇
```

### Tweet 2/8
```
Template 1: Shopify Order → Instant Digital Delivery

• Real-time webhook (not polling)
• Filters digital products only
• Fetches from Google Drive by product handle
• Emails customer with attachment
• Moves file to "Delivered" folder for tracking
• Error handling included
```

### Tweet 3/8
```
Template 2: Etsy Order → Digital Delivery

• Polls Etsy API every 10 min
• Detects digital transactions automatically
• Gets download URL straight from Etsy (no Drive needed!)
• Sends branded email with secure link
• Works with Etsy's native digital files
```

### Tweet 4/8
```
Template 3: Shopify + Etsy → Unified HubSpot CRM + Smart Reviews

• One CRM view for BOTH platforms
• Creates contacts + deals + timeline notes
• Smart tags: repeat buyer, high-value ($100+), digital vs physical
• ONLY requests reviews from repeat physical buyers
• Digital buyers already got instant delivery — don't annoy them!
```

### Tweet 5/8
```
Why n8n over Zapier/Make?

✅ Free tier: 4,000 executions/mo
✅ Self-hostable for $0
✅ Webhooks (real-time Shopify)
✅ Complex logic without code
✅ Encrypted credentials + OAuth2
✅ Export JSON anytime — no lock-in
```

### Tweet 6/8
```
Setup: ~20 minutes total
1. Import 3 JSON files (30 sec)
2. Add credentials in n8n UI (15 min)
3. Replace placeholders (5 min)
4. Toggle "Active" → live

Zero code. Visual editor. Done.
```

### Tweet 7/8
```
The pack: $49 one-time (no subscription)

Includes:
• All 3 workflows
• Complete setup guide
• Lifetime updates
• **Full resell rights** — repackage, rebrand, sell as your own

Pays for itself in 1–2 days of time saved.
```

### Tweet 8/8
```
Get it here: [Gumroad link]

Questions? Reply here or email yassineti140@gmail.com

Built this because I needed it. Hope it saves you the 40 hours it saved me. 🤝

#n8n #automation #shopify #etsy #digitalproducts #nocode
```

---

## LinkedIn Post (Launch Day)

```
I used to spend 40+ hours a year manually delivering digital products.

Every time a customer bought a Notion template, ebook, or preset pack from my Shopify or Etsy store, I'd:
1. Check the order
2. Find the right file in Google Drive
3. Email it to them
4. Log it in my CRM
5. Set a reminder to ask for a review later

At 20 orders/week, that's 10+ hours of pure busywork every single month.

So I automated it.

I built 3 production-ready n8n workflow templates that handle the entire loop:

🔄 **Shopify Order → Instant Digital Delivery**
Real-time webhook. Filters digital products. Fetches from Google Drive. Emails with attachment. Audit trail.

🛍️ **Etsy Order → Digital Delivery**
Polls Etsy API. Detects digital transactions. Fetches Etsy's native download URL. Emails secure link.

🎯 **Shopify + Etsy → Unified HubSpot CRM + Smart Reviews**
One customer view across both platforms. Creates contacts, deals, timeline notes. Smart tags (repeat, high-value, digital vs physical). Conditional review requests — only asks repeat PHYSICAL buyers (digital buyers already got instant gratification).

Setup takes ~20 minutes. Zero code. Runs on n8n's free tier.

The pack is $49 one-time with full resell rights — you can repackage and sell it as your own.

If you sell digital products on Shopify or Etsy, this saves you the 40 hours it saved me.

Link in comments. Happy to answer questions.

#automation #n8n #shopify #etsy #digitalproducts #ecommerce #nocode #passiveincome
```

---

## Reddit Posts (r/shopify, r/EtsySellers, r/n8n, r/sidehustle)

### r/shopify
**Title:** I built 3 n8n workflows that automate my entire Shopify digital product delivery + CRM sync — sharing the templates

**Body:**
Hey r/shopify,

I sell Notion templates and digital planners on Shopify. Was manually handling every order — checking if digital, finding file in Drive, emailing customer, updating CRM. 15-30 min per order.

Built 3 n8n workflows to automate it:

1. **Shopify → Digital Delivery** — Webhook trigger, filters digital products, fetches from Google Drive by handle, emails with attachment, moves to "Delivered" folder
2. **Etsy → Digital Delivery** — Polls Etsy API, detects digital transactions, gets Etsy's native download URL, emails link
3. **Shopify + Etsy → Unified HubSpot CRM** — Aggregates both platforms, creates contacts/deals/notes, smart tags (repeat, high-value, digital/physical), conditional review requests

Setup: ~20 min. Zero code. Runs on n8n free tier (4k executions/mo).

Pack is $49 one-time with resell rights. Includes all 3 JSON files + setup guide.

Happy to answer questions about n8n, Shopify webhooks, or the workflows themselves.

[Gumroad link]

---

### r/EtsySellers
**Title:** Automating Etsy digital delivery + Shopify sync with n8n (templates included)

**Body:**
Etsy sellers — if you also sell on Shopify (or want to), this might help.

I built an n8n workflow that:
- Polls Etsy API every 10 min for new paid orders
- Auto-detects digital transactions (is_digital: true)
- Fetches the download URL directly from Etsy
- Emails the customer a branded delivery email
- ALSO syncs to HubSpot alongside Shopify orders for unified CRM

Plus two more workflows: pure Shopify delivery, and the unified CRM with smart review requests (only asks repeat physical buyers for reviews — digital buyers already got instant delivery).

$49 for all 3 templates + resell rights. Setup ~20 min on n8n free tier.

[Gumroad link] — happy to help with setup questions.

---

### r/n8n
**Title:** 3 production e-commerce workflows: Shopify webhook delivery, Etsy API polling, unified HubSpot CRM

**Body:**
Built these for my own stores, sharing as templates:

1. **Shopify webhook → Digital delivery** — Real-time, filters by fulfillment_service/product_type, Google Drive fetch by handle, Gmail send with attachment, audit folder move
2. **Etsy API polling → Digital delivery** — 10 min interval, detects is_digital/digital_file_id, fetches Etsy download URL, Gmail send
3. **Dual-platform → HubSpot CRM** — Merges both sources, upsert contacts, create deals (Closed Won), timeline notes, smart tagging (repeat, high-value >$100, digital/physical), conditional review email (only repeat physical buyers)

All credentials via n8n encrypted store (OAuth2 for Google/Gmail/HubSpot, header auth for Etsy). Error handling + logging throughout.

$49 on Gumroad with resell rights. JSON import → add creds → customize placeholders → activate.

[Link] — feedback welcome, especially on the HubSpot enrichment logic.

---

### r/sidehustle
**Title:** How I automated 10+ hrs/week of digital product busywork with n8n (templates for sale)

**Body:**
Was spending 40+ hrs/year manually delivering digital files from Shopify/Etsy. Built 3 n8n workflows that do it all automatically. Now 0 min/order.

Selling the templates for $49 with resell rights. If you're in the digital product space, this pays for itself in 1-2 days.

Details in the Gumroad listing: [link]

---

## Email Sequence (for buyers / leads)

### Email 1: Delivery + Quick Start (Immediate)
**Subject:** Your AutoFlow templates are ready 📦

**Body:**
Hey there!

Thanks for grabbing AutoFlow. Your 3 workflow templates are attached:

- `shopify-digital-delivery.json`
- `etsy-digital-delivery.json`
- `shopify-etsy-unified-crm.json`

**Quick start (5 minutes):**
1. Open n8n → Settings → Workflows → Import → select each JSON
2. Go to Credentials → add your Shopify, Google Drive, Gmail, Etsy API, HubSpot
3. Open each workflow → replace `yourstore.com`, `yourshop`, `noreply@yourstore.com` with your details
4. Save → Toggle "Active" on each

Full step-by-step guide in `README.md`.

**Need help?** Reply to this email or hit me at yassineti140@gmail.com — I personally answer every question.

Enjoy the automation!
— [Your Name]

---

### Email 2: Pro Tips (Day 2)
**Subject:** 3 pro tips for your new workflows ⚡

**Body:**
Now that you're up and running, here are 3 things most people miss:

**1. Test with a real order first**
Place a test order on your own store (use a 100% discount code). Watch the execution in n8n's "Executions" tab. Verify the email arrives, file attaches, CRM updates.

**2. Set up execution alerts**
n8n → Settings → Executions → Enable "Failed execution notifications". You'll get an email if anything breaks. Peace of mind.

**3. Customize the review timing (Template 3)**
Default sends review request immediately for repeat physical buyers. Want to wait 7 days after delivery? In the "Send Review Request Email" node, add a "Wait" node before it: 7 days, "Wait for webhook" = false.

**Bonus:** The Google Drive folder structure for Template 1:
```
digital-products/
├── my-ebook.zip
├── notion-template.zip
└── preset-pack.zip
```
Filename = product handle (lowercase, hyphens). "Ultimate Notion Template" → handle `ultimate-notion-template` → file `ultimate-notion-template.zip`.

Questions? Just reply.

---

### Email 3: Resell Rights Reminder (Day 7)
**Subject:** You can sell these workflows too 💰

**Body:**
Forgot to mention: your purchase includes **full resell rights**.

You can:
- Rebrand as "YourName's Shopify Automation Pack"
- Bundle with your own course/templates/coaching
- Sell on Gumroad, your site, to clients
- Keep 100% of revenue
- No attribution required (but appreciated!)

**One restriction:** Don't sell the raw JSON files on template marketplaces (Etsy, Creative Market) without adding value — e.g., combine with a video course, create a niche-specific bundle, add setup service.

**Idea:** "Notion Template Seller's Automation Kit" — your Notion templates + these workflows + a 30-min Loom setup walkthrough. Sell for $97.

Let me know if you build something cool with them!

---

### Email 4: Feedback + Referral (Day 14)
**Subject:** How's it running? (and a favor) 🙏

**Body:**
Two weeks in — how are the workflows treating you?

If they're saving you time, I'd be grateful for:
1. **A quick reply** — what's the #1 thing you automated? (I collect these for social proof)
2. **A Gumroad review** — takes 30 seconds, helps other sellers find this
3. **A share** — if you know another digital product seller who'd benefit, forward this email

**Referral perk:** If someone buys via your forward, reply with their email and I'll send you a $10 Gumroad credit (stackable, no limit).

Thanks for being an early customer. Building more templates soon — any workflows you wish existed?

---

## Cold Outreach Templates (for service upsell)

### Template A: DM to Shopify/Etsy sellers (Twitter/LinkedIn)
```
Hey [name], saw you sell [product type] on [Shopify/Etsy] — awesome stuff.

Quick question: how do you handle digital delivery + CRM sync right now? 

I built n8n workflows that automate the whole thing (instant delivery, unified HubSpot, smart review requests). Saves me 10+ hrs/week.

If you're doing it manually, happy to share the templates ($49) or set it up for you ($149 done-for-you).

Either way, keep crushing it! 🤝
```

### Template B: Email to digital product course creators
**Subject:** Automation for your students' stores

**Body:**
Hey [name],

Love your [course name] — the [specific module] on [topic] is gold.

I noticed many digital product sellers in your community struggle with the "last mile": order comes in → manual delivery → manual CRM update → forgotten review requests.

I built a template pack (3 n8n workflows) that automates this entire loop. $49, includes resell rights.

**Partnership idea:** Bundle it as a bonus for your course ("Automation Kit — $49 value included free"). Your students get instant value, you look generous, I get exposure.

Happy to set up an affiliate link (30% commission) or just gift you a copy to evaluate.

Let me know if interesting!

---

## Content Calendar (First 2 Weeks Post-Launch)

| Day | Platform | Content |
|-----|----------|---------|
| Day 0 | Twitter/X | Launch thread (8 tweets) |
| Day 0 | LinkedIn | Launch post |
| Day 0 | Reddit | r/shopify + r/EtsySellers + r/n8n |
| Day 0 | Gumroad | Product live |
| Day 0 | Email | Delivery + quick start to buyers |
| Day 1 | Twitter/X | Screenshot of workflow in n8n editor + "This node does X" |
| Day 1 | LinkedIn | "Behind the build: why I chose n8n over Zapier" |
| Day 2 | Email | Pro tips to buyers |
| Day 2 | Twitter/X | Customer testimonial (Sarah K.) |
| Day 3 | LinkedIn | "The hidden cost of manual digital delivery" (calculation post) |
| Day 4 | Twitter/X | "Most asked Q: 'Do I need n8n paid plan?' → No, free tier works" |
| Day 5 | Reddit | r/sidehustle post |
| Day 6 | Email | Resell rights reminder |
| Day 7 | Twitter/X | "Just hit 10 sales — here's what I learned" |
| Day 7 | LinkedIn | Case study: "How Marcus unified Shopify + Etsy CRM" |
| Day 8 | Twitter/X | Screenshot: Google Drive "Delivered" folder auto-organization |
| Day 9 | Email | Feedback + referral request |
| Day 10 | Twitter/X | "Building Template 4: Abandoned cart → AI email sequence. Want early access?" |
| Day 11 | LinkedIn | "n8n vs Make vs Zapier for e-commerce: my honest take" |
| Day 12 | Twitter/X | FAQ thread: "Top 5 questions answered" |
| Day 13 | Email | "What workflow should I build next? Reply with your pain point" |
| Day 14 | All | 2-week recap + next template teaser |

---

## Assets Needed (Create Before Launch)

1. **Cover image** (1200x628) — Dark bg, cyan accent, "AutoFlow: Shopify + Etsy Automation Templates"
2. **5 preview images** for Gumroad/Etsy:
   - Landing page hero
   - Workflow 1 in n8n canvas
   - Workflow 2 in n8n canvas
   - Workflow 3 in n8n canvas
   - README.md in editor
3. **Video demo** (2-3 min) — Loom walkthrough: import → credentials → customize → activate → test order
4. **OG image** for landing page (1200x630)
5. **Favicon** (32x32, cyan arrow on dark)