export const GTM_ID = "GTM-5Q4QZDV"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
