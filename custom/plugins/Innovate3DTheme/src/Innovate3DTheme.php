<?php declare(strict_types=1);

namespace Innovate3DTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Storefront\Theme\ThemeLifecycleService;

class Innovate3DTheme extends Plugin
{
    public function install(InstallContext $installContext): void
    {
        parent::install($installContext);
        
        $themeLifecycleService = $this->container->get(ThemeLifecycleService::class);
        $themeLifecycleService->refreshThemes($installContext->getContext());
    }

    public function uninstall(UninstallContext $uninstallContext): void
    {
        parent::uninstall($uninstallContext);
        
        if ($uninstallContext->keepUserData()) {
            return;
        }
        
        $themeLifecycleService = $this->container->get(ThemeLifecycleService::class);
        $themeLifecycleService->refreshThemes($uninstallContext->getContext());
    }

    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }

    public function getThemePrefix(): string
    {
        return 'Innovate3DTheme';
    }
} 