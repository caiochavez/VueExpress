import api from './Api'

export default {
  index () {
    return api().get('songs')
  }
}
