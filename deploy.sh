# Run this script from the project root

echo 'Taking CMS offline'
php ./craft off

echo 'Clearing Cached Data'

php ./craft cache/flush-all 

php ./craft clear-caches/all
# php ./craft clear-caches/compiled-classes
# php ./craft clear-caches/compiled-templates
# php ./craft clear-caches/cp-resources
# php ./craft clear-caches/temp-files
# php ./craft clear-caches/data
# php ./craft clear-caches/retour-redirect-caches
# php ./craft clear-caches/seomatic-frontendtemplate-caches
# php ./craft clear-caches/seomatic-metabundle-caches
# php ./craft clear-caches/seomatic-schema-caches
# php ./craft clear-caches/seomatic-sitemap-caches
# php ./craft clear-caches/vite-file-cache
# php ./craft clear-caches/hyper
# php ./craft clear-caches/icon-picker

php ./craft clear-deprecations/index

# Optional - reset any untracked changes
git reset --hard

echo 'Pulling the main branch from the repo'
git pull

echo 'Installing Composer Packages'
composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

echo 'Updating Craft'
php craft update/composer-install --interactive=0
php craft migrate/all --no-content --interactive=0
php craft project-config/apply
php craft migrate --track=content --interactive=0



echo 'Taking Craft Back Online'
php ./craft on

echo 'Done!'
