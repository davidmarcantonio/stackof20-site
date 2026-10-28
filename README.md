# stackof20 website

Static product site at https://stackof20.com, hosted with GitHub Pages. The app source is in the separate private davidmarcantonio/stackof20 repository. This repository contains public website content and release-sync tooling only.

## Updating the app and site

Build, sign and notarize on codey-box. Run the private app repository's scripts/prepare_distribution.py for the v1 channel. It emits a signed appcast, checksum-pinned cask and public release.json metadata. Publish the exact ZIP, appcast.xml, release.json and SHA256SUMS.txt on a stable release in stackof20/stackof20. Never upload source archives, Xcode archives, Keychain records or signing keys.

The site workflow checks published stable releases every 15 minutes and on manual runs. It verifies the feed signature with the pinned public key and verifies the ZIP signature/checksum before accepting a new release. It updates the displayed version, build, download links, release-notes links and exact signed appcast, commits them here and deploys Pages. The tap has its own corresponding scheduled sync. These workflows need only their own repository's GitHub Actions token; no shared personal token or signing secret is used.

For an immediate site refresh after a release, run the Sync release and deploy site workflow. Homebrew's Sync verified cask workflow can also be run immediately. Scheduled runs are subject to GitHub Actions scheduling delays.

## Website edits and graphics

Edit the HTML, styles.css and install.js on main. GitHub Actions builds only the public HTML/JS/CSS, assets, release.json, CNAME and updates directory into Pages. No analytics or third-party font requests are added.

When UI changes, regenerate compact native screenshots using the private app's scripts/render_submission_screenshots.py. The captures use production views and fictional mail, without accessing real accounts, CloudKit or production licensing state. Review them and replace the responsive content-addressed image assets. Do not use invented UI mockups for product screenshots.

Keep purchase, privacy and support copy aligned with the app: 14-day local trial, $5 USD once for v1, three personal Macs, no subscription, v1 updates included and refund requests within 30 days. Explain Lemon Squeezy checkout/licensing, Sparkle updates and GitHub hosting. Support: hello@stackof20.com.
