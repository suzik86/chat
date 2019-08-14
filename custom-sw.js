self.addEventListener('push', event => {
    /*const data = event.data.json()
    console.log('New notification', data)
    const options = {
      body: data.body,
    }
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );*/
    const options = {
        body: 'body',
      }
    event.waitUntil(
        self.registration.showNotification('title', options)
    );
  })
