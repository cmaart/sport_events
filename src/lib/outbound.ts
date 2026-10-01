/**
 * Outbound links to the ENDURE main site / training app.
 *
 * All links carry UTM parameters so the main site's analytics can attribute
 * traffic to the events site and to the exact placement that was clicked.
 *
 *   utm_source   = events.endure-cycling.com (fixed)
 *   utm_medium   = referral (fixed)
 *   utm_campaign = app-promo | footer
 *   utm_content  = placement detail, e.g. "event-detail", "start", "footer-logo"
 */

const ENDURE_SITE = 'https://endure-cycling.com/';
const UTM_SOURCE = 'events.endure-cycling.com';
const UTM_MEDIUM = 'referral';

export type EndureCampaign = 'app-promo' | 'footer';

export function endureUrl(campaign: EndureCampaign, content: string, path = '/'): string {
  const url = new URL(path, ENDURE_SITE);
  url.searchParams.set('utm_source', UTM_SOURCE);
  url.searchParams.set('utm_medium', UTM_MEDIUM);
  url.searchParams.set('utm_campaign', campaign);
  url.searchParams.set('utm_content', content);
  return url.toString();
}
