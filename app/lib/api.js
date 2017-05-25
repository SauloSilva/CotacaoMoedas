class Api {
  static headers() {
    return {
      'Accept': 'text/xml',
      'Content-Type': 'text/xml',
      'dataType': 'xml'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(url, params, verb) {
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()

    return fetch(url, options);
  }
}
export default Api
