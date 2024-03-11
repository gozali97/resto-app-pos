<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Error 401</title>
    @vite('resources/css/app.css')
</head>
<body>
<div class="flex w-full justify-center items-center">
    <main class="mt-0 transition-all duration-200 ease-in-out w-full">
        <div class="pb-0 pt-0 h-full w-full min-h-screen items-center justify-center p-0 relative overflow-hidden flex bg-cover bg-center bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/error-500.jpg')]">
            <div class="max-w-xl">
                <div class="flex flex-wrap items-center justify-center -mx-3 mt-42 lg:mt-72">
                    <div class="w-full max-w-full px-6 mx-auto text-center shrink-0 md:flex-0 md:w-7/12 lg:w-6/12">
                        <h1 class="animate-fade-up leading-tighter text-['calc(1.625rem_+_4.5vw)'] font-bold text-white z-1 relative xl:text-20">Error 500</h1>
                        <h2 class="text-white opacity-80 animate-fade-up">Something went wrong</h2>
                        <p class="text-xl font-normal leading-relaxed text-white animate-fade-up">We suggest you to go to the homepage while we solve this issue.</p>
                        <a href="{{ route('login') }}" class="inline-block px-6 py-3 mt-6 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer animate-fade-up hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-orange-500 to-yellow-500 leading-pro tracking-tight-rem bg-150 bg-x-25">Go to homepage</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</body>
</html>
