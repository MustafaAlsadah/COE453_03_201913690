
exports.mulFunc = (req, res) => {
    const { X, Y } = req.body;
    const mul = X * Y;
    res.status(200).json({ 'X': X, 'Y': Y, 'Result': mul })
}


exports.divFunc = (req, res) => {
    const { X, Y } = req.body;
    const div = X / Y;
    res.status(200).json({ 'X': X, 'Y': Y, 'Result': div })
}

exports.addFunc = (req, res) => {
    const { X, Y } = req.body;
    const add = X + Y;
    res.status(200).json({ 'X': X, 'Y': Y, 'Result': add })
}

exports.subFunc = (req, res) => {
    const { X, Y } = req.body;
    const sub = X - Y;
    res.status(200).json({ 'X': X, 'Y': Y, 'Result': sub })
}