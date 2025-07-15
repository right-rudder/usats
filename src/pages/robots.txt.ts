import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
# Robots.txt for USATS Flight Training
# https://usatsflighttraining.com/robots.txt
# Updated: ${new Date().toISOString().split("T")[0]}

# Major Search Engines - Full Access
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Googlebot-Image
Allow: /
Crawl-delay: 1

User-agent: Googlebot-Video
Allow: /
Crawl-delay: 1

User-agent: Googlebot-News
Allow: /
Crawl-delay: 1

User-agent: AdsBot-Google
Allow: /
Crawl-delay: 2

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: msnbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Baiduspider
Allow: /
Crawl-delay: 3

User-agent: YandexBot
Allow: /
Crawl-delay: 2

User-agent: facebookexternalhit
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /
Crawl-delay: 1

User-agent: LinkedInBot
Allow: /
Crawl-delay: 2

# Archive and Library Bots
User-agent: ia_archiver
Allow: /
Crawl-delay: 5

User-agent: Wayback
Allow: /
Crawl-delay: 5

# SEO and Analytics Tools
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SplitSignalBot
Disallow: /

User-agent: PetalBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: PerplexityBot
Disallow: /

# Aggressive Crawlers and Scrapers
User-agent: SiteAuditBot
Disallow: /

User-agent: EmailCollector
Disallow: /

User-agent: EmailSiphon
Disallow: /

User-agent: WebBandit
Disallow: /

User-agent: EmailWolf
Disallow: /

User-agent: ExtractorPro
Disallow: /

User-agent: CopyRightCheck
Disallow: /

User-agent: psbot
Disallow: /

User-agent: asterias
Disallow: /

User-agent: BackDoorBot
Disallow: /

User-agent: Black Hole
Disallow: /

User-agent: BlowFish
Disallow: /

User-agent: BotALot
Disallow: /

User-agent: BuiltBotTough
Disallow: /

User-agent: Bullseye
Disallow: /

User-agent: CheeseBot
Disallow: /

User-agent: CherryPicker
Disallow: /

User-agent: CopyRightCheck
Disallow: /

User-agent: cosmos
Disallow: /

User-agent: Crescent
Disallow: /

User-agent: Custo
Disallow: /

User-agent: DISCo
Disallow: /

User-agent: DittoSpyder
Disallow: /

User-agent: Download Ninja
Disallow: /

User-agent: EirGrabber
Disallow: /

User-agent: EmailCollector
Disallow: /

User-agent: EmailSiphon
Disallow: /

User-agent: EmailWolf
Disallow: /

User-agent: EroCrawler
Disallow: /

User-agent: Exabot
Disallow: /

User-agent: ExtractorPro
Disallow: /

User-agent: Fasterfox
Disallow: /

User-agent: FeedBooster
Disallow: /

User-agent: Foobot
Disallow: /

User-agent: Gaisbot
Disallow: /

User-agent: GetRight
Disallow: /

User-agent: GetWeb!
Disallow: /

User-agent: Go!Zilla
Disallow: /

User-agent: Go-Ahead-Got-It
Disallow: /

User-agent: GrabNet
Disallow: /

User-agent: Grafula
Disallow: /

User-agent: HMView
Disallow: /

User-agent: HTTrack
Disallow: /

User-agent: ia_archiver
Disallow: /admin
Disallow: /private

User-agent: Image Stripper
Disallow: /

User-agent: Image Sucker
Disallow: /

User-agent: Indy Library
Disallow: /

User-agent: InfoNaviRobot
Disallow: /

User-agent: InterGET
Disallow: /

User-agent: Internet Ninja
Disallow: /

User-agent: JetCar
Disallow: /

User-agent: JOC Web Spider
Disallow: /

User-agent: larbin
Disallow: /

User-agent: LeechFTP
Disallow: /

User-agent: Mass Downloader
Disallow: /

User-agent: MIIxpc
Disallow: /

User-agent: Mister PiX
Disallow: /

User-agent: Navroad
Disallow: /

User-agent: NearSite
Disallow: /

User-agent: NetAnts
Disallow: /

User-agent: NetSpider
Disallow: /

User-agent: Net Vampire
Disallow: /

User-agent: NetZIP
Disallow: /

User-agent: Octopus
Disallow: /

User-agent: Offline Explorer
Disallow: /

User-agent: Offline Navigator
Disallow: /

User-agent: PageGrabber
Disallow: /

User-agent: Papa Foto
Disallow: /

User-agent: pavuk
Disallow: /

User-agent: pcBrowser
Disallow: /

User-agent: RealDownload
Disallow: /

User-agent: ReGet
Disallow: /

User-agent: SiteSnagger
Disallow: /

User-agent: SmartDownload
Disallow: /

User-agent: SuperBot
Disallow: /

User-agent: SuperHTTP
Disallow: /

User-agent: Surfbot
Disallow: /

User-agent: tAkeOut
Disallow: /

User-agent: Teleport Pro
Disallow: /

User-agent: VoidEYE
Disallow: /

User-agent: Web Image Collector
Disallow: /

User-agent: Web Sucker
Disallow: /

User-agent: WebAuto
Disallow: /

User-agent: WebCopier
Disallow: /

User-agent: WebFetch
Disallow: /

User-agent: WebGo IS
Disallow: /

User-agent: WebLeacher
Disallow: /

User-agent: WebReaper
Disallow: /

User-agent: WebSauger
Disallow: /

User-agent: Website eXtractor
Disallow: /

User-agent: Website Quester
Disallow: /

User-agent: WebStripper
Disallow: /

User-agent: WebWhacker
Disallow: /

User-agent: WebZIP
Disallow: /

User-agent: Wget
Disallow: /

User-agent: Widow
Disallow: /

User-agent: WWWOFFLE
Disallow: /

User-agent: Xaldon WebSpider
Disallow: /

User-agent: Zeus
Disallow: /

# Default rule for all other bots
User-agent: *
Allow: /
Crawl-delay: 10
Disallow: /admin/
Disallow: /private/
Disallow: /*.pdf$
Disallow: /*?
Disallow: /*/*?
Disallow: /search*
Disallow: /cgi-bin/
Disallow: /scripts/
Disallow: /tmp/
Disallow: /logs/
Disallow: /.env
Disallow: /.git/
Disallow: /node_modules/
Disallow: /package*.json
Disallow: /tsconfig.json
Disallow: /astro.config.*
Disallow: /tailwind.config.*

# Sitemaps
Sitemap: ${sitemapURL.href}
Sitemap: ${sitemapURL.href.replace("sitemap-index.xml", "sitemap.xml")}

# Host directive for primary domain
Host: usatsflighttraining.com
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
      "X-Robots-Tag": "noindex, nofollow", // Don't index the robots.txt itself
    },
  });
};
