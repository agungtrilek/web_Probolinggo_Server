module.exports = {
    isLoginAdmin: (req, res, next) => {
        if (req.session.user === null || req.session.user === undefined) {
            req.flash('alertMessage', 'maaf session anda telah habis')
            req.flash('alertStatus', 'danger')
            res.redirect('/')
        } else {
            next()
        }
    }
}