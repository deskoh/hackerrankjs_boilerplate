exports.mochaGlobalTeardown = async function() {
  process.stdout.end();
};
