/* This file must point to /vaultv7/ */
self.__uv$config = {
    prefix: '/vaultv7/service/',
    bare: 'https://bare.benroig.me/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/vaultv7/uv/uv.handler.js',
    client: '/vaultv7/uv/uv.client.js',
    bundle: '/vaultv7/uv/uv.bundle.js',
    config: '/vaultv7/uv/uv.config.js',
    sw: '/vaultv7/uv/uv.sw.js',
};
