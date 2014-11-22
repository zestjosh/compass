# Flagship Compass

The most advanced WordPress Starter theme ever created.

__Contributors:__ [Robert Neu](https://github.com/robneu), [Gary Jones](https://github.com/GaryJones)  
__Requires:__ WordPress 4.0  
__Tested up to:__ WordPress 4.0  
__License:__ [GPL-2.0+](http://www.gnu.org/licenses/gpl-2.0.html)  

Compass will revolutionize your theme development workflow by removing all the guesswork and letting you focus on the fun stuff. Built using the latest and greatest web development tools like Grunt, Sass, Bourbon, and Hybrid Core.

## Contributing

We're open to any and all feedback about the project and we're actively looking for contributors. You can submit code changes here on GitHub by opening a pull request. If you'd like to submit ideas, please open an issue or create a thread on our [community forum](http://community.flagshipwp.com/category/compass). If you would like to translate Compass into your language, we have a [public Transifex project](https://www.transifex.com/projects/p/flagship-compass/) set up where you can request team access.

## Project Overview

This documentation is by no means complete and will be expanded upon in the near future. In order to get up and running, you'll need to install a few key components. We've put together a screencast which will walk you through the setup process and we also have an entire pulic [forum dedicated to Compass](http://community.flagshipwp.com/category/compass) where you can register and learn from other developers who are using it to build cool stuff.

### Project Structure

    .
    ├── assets
    │   ├── bower (added by build task)
    │   ├── composer (added by build task)
    │   └── flagship
    │       ├── images
    │       ├── js
    │       └── scss
    ├── dist (added by package task)
    ├── grunt
    │   ├── config
    │   └── tasks
    ├── logs (added by build/check tasks)
    ├── reports (added by plato task)
    ├── theme
    │   ├── comment
    │   ├── content
    │   │   ├── archive
    │   │   └── singular
    │   ├── css (added by build task)
    │   ├── font (added by build task)
    │   ├── hybrid-core (pulled in as dependency)
    │   ├── includes
    │   │   └── vendor (added by build task)
    │   │       └── flagship-library (pulled in as dependency)
    │   ├── js (added by build task)
    │   ├── languages (added by build task)
    │   ├── menu
    │   ├── misc-templates
    │   └── sidebar
    └── tmp (added by build task)

## Installation Instructions

### Ruby and Sass

Compass uses [Ruby](https://www.ruby-lang.org/en/) and Sass to build the `.scss` files into a CSS file. [Install Ruby](https://www.ruby-lang.org/en/installation/) and then run `gem install sass` to install Sass. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

### GNU Gettext

Compass uses [grunt-potomo](https://github.com/axisthemes/grunt-potomo) to compile .po files into binary .mo files. In order for this to work correctly, you must have  [GNU Gettext](http://www.gnu.org/software/gettext/) installed and in your PATH. On Mac OSX, the easiest way to do this is using [Homebrew](http://brew.sh/). Once you have Homebrew installed, run the following commands to install GNU Gettext:

~~~sh
brew install gettext
brew link gettext --force
~~~

### Composer

Compass also uses [Composer](https://getcomposer.org/) to manage PHP dependencies such as [Hybrid Core](https://github.com/justintadlock/hybrid-core), [Flagship Library](https://github.com/FlagshipWP/flagship-library), and [Theme Hook Alliance](https://github.com/zamoose/themehookalliance) support. [Install Composer](https://getcomposer.org/doc/00-intro.md) to enable this functionality.

Make sure you have `~/.composer/vendor/bin/` or `/usr/local/bin/` (if you moved it) in your path by running:

~~~sh
composer --version
~~~

If you don't get a version number, then you can add the path with:

~~~sh
export PATH="$PATH:~/path/to/your/composer/bin/"
~~~

After Composer is installed, you can optionally add some global (system-wide) packages that can be used across multiple projects for analyzing your PHP code. None of the following packages are used directly within this project, but you may wish to experiment with them later.

Run the following commands in a command line terminal:

~~~sh
composer global require "phploc/phploc=*"
composer global require "phpmd/phpmd=*"
composer global require "phpunit/phpunit=*"
composer global require "sebastian/phpcpd=*"
composer global require "sebastian/phpdcd=*"
~~~

The final system-wide composer package that you should consider adding requires that you make a change to your global composer config file. Run the following command to open up the config file in your default code editor:

~~~sh
composer config -g -e
~~~

Once you have the file open, you need to add the following code OUTSIDE the config brackets:

~~~sh
"minimum-stability": "dev",
"prefer-stable": true
~~~

If you're using the default composer configuration, your global config file will probably look something like this after making the necessary changes:

~~~sh
{
    "config": {},
    "minimum-stability": "dev",
    "prefer-stable": true
}
~~~

Your file could vary slightly, depending on whether or not you've made other changes to the global configuration in the past. Once you've saved the new config, you'll need to run one final command to install the last system-wide package:

~~~sh
composer global require "halleck45/phpmetrics=@dev"
~~~

### PHP_CodeSniffer

One tool that is used in this project is the [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) (PHPCS), along with the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) sniffs. 

To install PHP_CodeSniffer and the WordPress standards:

~~~sh
cd ~/path/to/install/dir
git clone https://github.com/squizlabs/PHP_CodeSniffer.git phpcs
git clone https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs
cd phpcs
scripts/phpcs --config-set installed_paths ../wpcs
~~~

Then edit your `$PATH` environment variable to include the location of the phpcs script. For example, add the following to your `~/.bashrc` (or `~/.profile` or `~/.bash_profile`)

~~~sh
export PATH="$PATH:~/path/to/install/dir/phpcs/scripts/"
~~~

This tool can be used directly, thought the `grunt phpcs` is already configured to use the correct standard.

### Node, NPM and Grunt

Finally, Compass requires Node.js to run the Grunt task runner, so [download Node.js](http://nodejs.org/download/) and install it.

Some Grunt tasks use external command-line applications, so you'll need them installed as global (not specific to this project) Node.js packages. Open up a terminal and run the following. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

~~~sh
npm install -g bower
npm install -g csscomb
npm install -g cssjanus
npm install -g grunt-cli
npm install -g jscs
npm install -g jshint
~~~

After unzipping or cloning this repo, `cd` into it and run `npm install`. This will then install all of the project-specific tasks.

To check everything appears to have installed, run `grunt check`. This will perform a series of checks on the project code to verify its health for syntax errors and code standards.

### Troubleshooting
If, when running a task (`grunt ...`) you get an error about _Cannot find module 'rimraf'_, then do the following:

~~~sh
npm uninstall grunt-phplint
npm install grunt-phplint
~~~

There's apparently a package dependency issue that means the _grunt-phplint_ package needs installing last.

## Learn How to Use Compass

Compass is designed to be a boilerplate for your own custom WordPress themes. For more information about how Compass works, visit the [Compass Wiki](https://github.com/FlagshipWP/compass/wiki) and our [community forum](http://community.flagshipwp.com/category/compass). If you find any bugs, issues, or have questions please open an issue or create a post on the forum. Thanks for giving Compass a look! We can't wait to see what you build with it.
