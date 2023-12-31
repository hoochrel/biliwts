const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
};

module.exports = async (ctx, next) => {
    ctx.set(headers);
    await next();
};
