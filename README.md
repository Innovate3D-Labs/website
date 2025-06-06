# Innovate3D Shopware Shop

This is the official online shop for Innovate3D, developed with Shopware 6 and Dockware.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Git
- Node.js (for theme development)
- Composer (for PHP dependencies)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:Innovate3D-Labs/website.git
cd website
```

2. Start Docker container:
```bash
docker-compose up -d
```

3. Access the shop:
- Frontend: http://localhost:8080
- Admin Backend: http://localhost:8080/admin
  - Username: admin
  - Password: shopware
- SSH Access: localhost:2222

## 🛠️ Development

### Theme Development
The theme is located in `shop/custom/plugins/Innovate3DTheme`. For development:

```bash
cd shop
npm install
npm run build
```

### Plugin Development
Plugins are located in `shop/custom/plugins/`. For development:

```bash
cd shop
bin/console plugin:refresh
bin/console plugin:install [Plugin-Name]
```

## 📁 Project Structure

```
website/
├── docker-compose.yml
├── shop/
│   ├── custom/
│   │   ├── plugins/
│   │   └── static-plugins/
│   └── public/
└── mysql/
```

## 🔧 Configuration

- Language: German
- Currency: EUR
- Timezone: Europe/Berlin
- Domain: localhost:8080

## 📦 Features

- 3D Printer Category
- Accessories & Spare Parts
- Electronics
- Services
- Special Offers
- PayPal & Stripe Integration
- DHL Shipping
- SEO Optimization
- Cookie Consent
- Custom Products
- Customer Registration
- Voucher System
- Wishlist
- Newsletter
- Full-text Search

## 🔒 Security

- All passwords and access credentials should be changed after installation
- SSL/TLS is recommended for production environments
- Regular MySQL database backups

## 📝 License

All rights reserved © Innovate3D 