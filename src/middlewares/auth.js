const adminAuth = (req, res,next) => {
    const token = "xyzz";
    const isAdminAuth = token === "xyz";
    
    if (!isAdminAuth) {
        return res.status(404).send("You are not authenticated");
    }
    
    next();
};

module.exports = adminAuth;
