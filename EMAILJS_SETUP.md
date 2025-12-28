# EmailJS Setup Guide for Aaryan Editz Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a FREE account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Interest: {{interest}}

Message:
{{message}}

---
This email was sent from the Aaryan Editz website contact form.
```

4. Save the template and copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "user_AbC123XyZ")

## Step 5: Update Contact.tsx
Open `/src/pages/Contact.tsx` and replace these values (around line 22-24):

```typescript
const serviceID = 'YOUR_SERVICE_ID';    // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';  // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';    // Replace with your Public Key
```

## Step 6: Update WhatsApp Number
In the same file (around line 56), update the WhatsApp number:

```typescript
const whatsappNumber = '919876543210'; // Replace with your actual WhatsApp number
// Format: Country code + number (no spaces, no +)
// Example for India: 919876543210
```

## Step 7: Test
1. Fill out the contact form on your website
2. Check your email inbox for the message
3. Click the WhatsApp button to test the integration

## Free Tier Limits
- EmailJS Free Plan: 200 emails/month
- More than enough for a small business website

## Optional: Email Receiving Address
The form is configured to send emails to: `hello@aaryaneditz.com`

To change this, update line 31 in Contact.tsx:
```typescript
to_email: 'your-email@example.com'
```

---

**That's it!** Your contact form will now send emails automatically.
