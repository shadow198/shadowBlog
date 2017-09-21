import UserModel from '../models/User'
import rand from 'csprng'
import sha1 from 'sha1'
// import User from '../models/User'
class User {
  async userLogin (req, res) {
    let username = req.body.name
    let find = await UserModel.findOne({username: username})
    console.log(find)
    if (find === null) {
      res.send('2')
    } else {
      let newpsd = sha1(req.body.psd + find.salt)
      if (newpsd === find.password) {
        res.send('1')
      } else {
        res.send('0')
      }
    }
    // console.log(username)
  }
  async updateUserInfo (req, res) {
    const salt = rand(160, 36)
    const user = {
      salt: salt,
      name: req.body.name,
      password: sha1(req.body.password + salt)
    }
    UserModel.update({_id: req.body.id}, user, (err) => {
      if (err) {
        console.log(err)
      } else {
        res.status(200).send('update successfully')
      }
    })
  }
}
export default new User()
