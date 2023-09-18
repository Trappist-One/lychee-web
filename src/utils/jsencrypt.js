import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKILNOsVD+PldMS1D4rEfdaSDCzbgwO9' +
                  'mWZYS2eg+rpVutKLL3DCNwMRo0jpafT/W4P7kTNRa6RHM3aiQ/Yb4pcCAwEAAQ=='

const privateKey =
'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAogs06xUP4+V0xLUP' +
'isR91pIMLNuDA72ZZlhLZ6D6ulW60osvcMI3AxGjSOlp9P9bg/uRM1FrpEczdqJD' +
'9hvilwIDAQABAkAURR6bgYj5UwymRpfpHec33hET02myIBd+S/Eyx1pV0IyT55bP' +
'iDCQ4wwqWLLHYY9S7ydTiCGhYPRw0hemSRRAiEA0HoDfkx5ACq6V71B6uzfCjS5' +
'PplPiJVeWWadFIlk0IMCIQDG+4fLYtX2kUIr3+sWt6zcHqufkz05SY2IdRlqkpPh' +
'XQIhALffBXm9ZPM6vENqTtsus8FCoyeM/FLQuvhKwrw8OciVAiAtbvlOoz6fkgM9' +
'6V7QTRgXGpmtUf1Eu1qpsbMf9l/1sQIgV0Rwcw5KgTbHjOt9BphIaA8X7o6tB/6r' +
'VQUcCEaRl78='

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

