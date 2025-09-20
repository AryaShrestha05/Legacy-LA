const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                error: {
                    message: 'No token provided',
                    status: 401
                }
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = {
            userId: decoded.userId,
            email: decoded.email
        };
        
        next();
    } catch (error) {
        return res.status(401).json({
            error: {
                message: 'Invalid or expired token',
                status: 401
            }
        });
    }
};

module.exports = authMiddleware;
