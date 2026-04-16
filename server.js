import express from 'express';

const app = express()

async function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("resolved"); }, 2000000);
  });
}

app.get('/', (req, res) => {
  res.send("")
})

app.listen(3000, async () => { 
  // console.log(`${y}`) 
  const result = await resolveAfter2Seconds();
  console.log(`${result}`)
})
