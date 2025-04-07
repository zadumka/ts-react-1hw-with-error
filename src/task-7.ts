function getMessage(): Promise<string> {
  setTimeout(() => {
    return "Hello from TS";
  }, 1000);
}

getMessage().then((result) => console.log(result));
