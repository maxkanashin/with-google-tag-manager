export const GTM_ID = "GTM-KX4FNSH"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
