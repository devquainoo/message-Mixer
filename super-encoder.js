// Import the encryptors functions here.
const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require("./encryptors.js");

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let output = caesarCipher(str, 6);
  output = symbolCipher(output);
  output = reverseCipher(output);
  return output;
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  let output = reverseCipher(str);
  output = symbolCipher(output);
  output = caesarCipher(output, -6);
  return output;
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
