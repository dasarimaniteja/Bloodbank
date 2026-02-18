const error = (err,req,res,next) => {
    console.log(err);
    res.stauts(err.status || 500).json({
        message: err.message || 'ERROR!!!',
    });
};

module.exports = error;