# Innovate3D Shopware Theme

A custom theme for Shopware 6, designed for Innovate3D's online store.

## Features

- Modern dark mode design
- Custom product card animations
- Responsive header with scroll effects
- Custom button styles
- Fully customizable through theme configuration

## Installation

1. Clone this repository into your Shopware installation's `custom/plugins` directory:
```bash
git clone https://github.com/your-username/innovate3d-theme.git custom/plugins/Innovate3DTheme
```

2. Install and activate the theme plugin:
```bash
bin/console plugin:refresh
bin/console plugin:install --activate Innovate3DTheme
bin/console theme:compile
```

3. In the Shopware admin panel:
   - Go to Settings → Themes
   - Assign the Innovate3D Theme to your sales channel
   - Click "Compile theme"

## Development

### Prerequisites

- Shopware 6.5.x
- Node.js and npm
- PHP 8.1 or higher

### Building the theme

```bash
# Install dependencies
npm install

# Watch for changes
./bin/watch-storefront.sh

# Build for production
./bin/build-storefront.sh
```

## Customization

The theme can be customized through:

1. Theme configuration in the Shopware admin panel
2. SCSS variables in `src/Resources/app/storefront/src/scss/base.scss`
3. JavaScript functionality in `src/Resources/app/storefront/src/js/custom.js`

## License

This theme is proprietary software. All rights reserved. 