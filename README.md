🌟 AFK Preschool — Serverless Website on AWS

A fully serverless preschool website built and deployed on AWS. Parents can register their child through an admission form — the data is stored in DynamoDB via a Lambda function triggered by API Gateway. The site also includes an admin panel for managing a gallery of student activities with secure authentication.

🌐 Live Site: afkschool.com

🏗️ Architecture
User visits afkschool.online
        ↓
Route 53 (Custom Domain + DNS)
        ↓
CloudFront (CDN + HTTPS)
        ↓
ACM Certificate (SSL/TLS Security)
        ↓
S3 Bucket (Static Website Hosting)
        ↓
User fills Registration Form
        ↓
API Gateway (REST API - POST /register)
        ↓
Lambda Function (Node.js)
        ↓
DynamoDB (Stores student registration data)

----------------------------------------

Gallery Feature (Public)
        ↓
Images stored in S3
        ↓
Displayed on website gallery page

----------------------------------------

Admin Login (2-Step Authentication)
        ↓
Enter Username & Password
        ↓
API Gateway
        ↓
Lambda validates credentials
        ↓
AWS SES sends OTP to email
        ↓
User enters OTP
        ↓
Lambda verifies OTP
        ↓
Admin Dashboard Access
        ↓
Upload/Delete Images
        ↓
S3 Bucket (Gallery Storage)
☁️ AWS Services Used
Service	Purpose
Amazon S3	Static website hosting + gallery image storage
Amazon Route 53	Custom domain and DNS management
AWS Certificate Manager (ACM)	SSL/HTTPS certificate
Amazon CloudFront	CDN for fast global delivery
Amazon API Gateway	REST API to handle form & admin requests
AWS Lambda	Serverless backend logic (Node.js)
Amazon DynamoDB	NoSQL database for student registrations
AWS SES	Email service for sending OTP
AWS WAF & Shield	Web application firewall and DDoS protection
✨ Features
Responsive preschool website with modern UI
Online student admission/registration form
Serverless backend — no EC2 or traditional server
Real-time form data stored in DynamoDB
Custom domain with SSL/HTTPS security
CloudFront CDN for fast load times globally
WAF protection against malicious traffic
SEO optimized — indexed on Google Search
🆕 Added Features
Admin login with username & password + OTP verification
OTP sent via email using AWS SES
Secure admin dashboard
Upload images to gallery
Delete images from gallery
Public gallery page to display student activity photos
📸 Screenshots
🔍 Indexed on Google Search

🌐 Website Homepage

📋 Registration Page

🖼️ Gallery Page (NEW)

🔐 Admin Login (NEW)

⚙️ Admin Dashboard (NEW)

✅ Form Submission Success

🗄️ DynamoDB — Real Student Data

⚡ Lambda Function (Node.js)

⚙️ API Gateway — Routes

🪣 S3 Bucket (Includes Gallery Images)

🔒 ACM SSL Certificate

🌍 Route 53 — DNS Configuration

☁️ Cloudfront

🛡️ WAF & Shield Protection

🛠️ Project Structure
Serverless-Preschool-Website/
│
├── index.html            # Main HTML structure
├── gallery.html          # Gallery page (NEW)
├── admin.html            # Admin panel (NEW)
├── config.example.js     # API config template (copy to config.js)
├── .gitignore
│
├── css/
│   └── style.css         # All styling and animations
│
├── js/
│   ├── main.js           # Form logic
│   ├── gallery.js        # Gallery functionality (NEW)
│   └── admin.js          # Admin logic (NEW)
│
└── screenshots/          # AWS console and website proof
⚙️ How It Works
User opens the website at afkschool.online
Route 53 routes the request, CloudFront serves the site via CDN
ACM certificate ensures secure HTTPS connection
S3 hosts the static HTML/CSS/JS files
📌 Admission Flow
Parent fills the admission form and clicks Submit
JavaScript sends a POST request to API Gateway
API Gateway triggers the Lambda function
Lambda stores data in DynamoDB
User sees success message
🖼️ Gallery Flow
User opens gallery page
Images are fetched from S3
Displayed on website
🔐 Admin Flow
Admin enters username & password
OTP sent via AWS SES
Admin verifies OTP
Access to dashboard granted
Admin can upload/delete images
🔐 Security
API Gateway URL stored in config.js (gitignored)
Two-step authentication for admin access
OTP verification via AWS SES
IAM roles configured with least privilege access
WAF rules protect against common web attacks
SSL/TLS encryption via ACM
Sensitive AWS account details hidden
📌 Note

This is a real client project built for AFK Preschool, Lucknow.
The config.js file containing the live API endpoint is not included in this repo for security reasons.
Refer to config.example.js for the configuration structure.

👨‍💻 Built By

Amir Khan — Cloud & DevOps Engineer
🔗 linkedin.com/in/amirkhan

📧 khan.amir07862@gmail.com
