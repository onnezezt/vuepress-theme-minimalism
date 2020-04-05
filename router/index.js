import Layout from './layouts/layout'

const install = (Vue, { router }) => {
  let rules = ['/', '/list', '/tags/', '/timeline/', '/posts']
  const routes = []

  for (var i = 0, len = rules.length; i < len; i++) {
    routes.push({
      name: rules[i],
      path: rules[i],
      component: Layout
    })
  }

  router.addRoutes(routes)
}

export default {
  install
}
