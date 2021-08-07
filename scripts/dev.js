require('esbuild')
  .serve(
    {
      servedir: 'www',
      port: 8000,
      host: '127.0.0.1'
    },
    {
      entryPoints: ['src/index.tsx'],
      bundle: true,
      outdir: 'www/js',
      target: ['es2020'], // 开发环境使用这个，  生产使用babel编译
      splitting: true,
      format: 'esm'
    }
  )
  .then((result) => {
    console.log(`运行中： http://${result.host}:${result.port}`)
  })