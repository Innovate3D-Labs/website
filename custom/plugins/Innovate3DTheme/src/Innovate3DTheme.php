<?php declare(strict_types=1);

namespace Innovate3DTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class Innovate3DTheme extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }

    public function getThemePrefix(): string
    {
        return 'Innovate3DTheme';
    }
} 