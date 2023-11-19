<template>
    <div class="z-[100]">



<div class="flex header-wrap !z-[100] classicHeader animated"
    :class="[
        isSticky ? 'stickyNav fadeInDown  dark:text-white fadeInDown dark:bg-gray-800' : '',
        $page.url === '/' ? '' : 'dark:bg-gray-800 bg-white'
    ]"
        @scroll="handleScroll">
    <div class="w-full px-4 lg:px-12">
        <div class="grid items-center justify-between w-full grid-cols-12 lg:mx-auto">
            <!--Desktop Logo-->
            <div class="hidden logo md:col-span-2 lg:block">
                <a href="">
                    <img src="/images/logo/find_02.png" class="hidden w-20 lg:block" alt="FInd" title="Find" />
                </a>
            </div>
            <!--End Desktop Logo-->
            <div class="col-span-3 lg:col-span-8">
                <div class="block lg:hidden">
                <button @click="navOpen = !navOpen"
                        class="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        x-bind:aria-label="navOpen ? 'Close main menu' : 'Main menu'" x-bind:aria-expanded="navOpen">
                        <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{ 'hidden': navOpen, 'inline-flex': !navOpen }" class="inline-flex" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{ 'hidden': !navOpen, 'inline-flex': navOpen }" class="hidden" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <!--Desktop Menu-->
                <nav class="relative grid__item" id="AccessibleNav"><!-- for mobile -->
                    <ul id="siteNav" class="site-nav medium center hidearrow">
                        <li class="lvl1 parent megamenu">


                            <Link :href="route('home')" class="boder-b-2 border-amber-600">

                                 <span class="dark:!text-white"
                                            :class="{ 'text-white ': !isSticky && !isNotHome, 'lg:hidden dark:!text-white': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">Accueil</span>

                                <span  class="dark:!text-white"  :class="{ 'hidden dark:!text-white': !isNotHome }">Accueil</span>




                            </Link>




                        </li>
                        <li class="lvl1 parent z-[60]  megamenu">

                                 <a href="">
                                        <span class="dark:!text-white" :class="{ 'lg:text-white': !isSticky && !isNotHome, 'lg:hidden': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">Categories</span>

                                        <span class="dark:!text-white" :class="{ 'hidden': !isNotHome }">Categories</span>



                                 </a>


                            <div class="megamenu z-50   dark:!bg-gray-800 !pb-12 style4 soft-scrollbar">
                                    <div>
                                            <Link :href="route('categories')" class="mb-2 font-bold dark:text-white Text-lg">Toutes les categories</Link>
                                        </div>
                                <ul class="grid grid-cols-4 dark:!text-white rounded-md grid--uniform mmWrapper">
                                    <li  v-for="category in categories" :key="category.id" class="grid__item lvl-1 col-md-3 col-lg-3">
                                        <Link :href="route('categoryName', category.name)" class="site-nav dark:!text-white lvl-1">{{ category.name }}</Link>
                                        <ul class="subLinks">
                                            <li v-for="(subcategory,index) in category.subcategories" class="lvl-2 dark:!text-white" >
                                                <Link v-if="index <4" :href="route('SubcategoryName', [category.name, subcategory.name])"  class="site-nav dark:!text-gray-50 lvl-2">{{ subcategory.name}}</Link>
                                            </li>

                                        </ul>
                                    </li>


                                </ul>
                            </div>

                        </li>
                        <li class="lvl1 parent dropdown">
                                 <a href="#">
                                    <span  class="dark:!text-white"  :class="{ 'lg:text-white': !isSticky && !isNotHome, 'lg:text-black lg:hidden': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">Freelance</span>

                                    <span class="dark:!text-white"  :class="{ 'hidden': !isNotHome }">Freelance</span>

                                 </a>



                                <ul class="dropdown dark:!bg-gray-800">
                                        <li>
                                             <Link :href="route('register.begin')">Devenir Freelance</Link>

                                        </li>
                                        <li> <Link :href="route('find_freelance')">Trouver un freelance</Link></li>
                                </ul>
                    </li>
                    <li class="lvl1 parent dropdown">
                         <a href="#">
                                        <span class="dark:!text-white"  :class="{ 'lg:text-white': !isSticky && !isNotHome, 'lg:hidden': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">Mission</span>

                                        <span class="dark:!text-white"  :class="{ 'hidden': !isNotHome }">Mission</span>

                         </a>
                         <ul class="dropdown">

                            <li>
                                <Link :href="route('createProject')" class="site-nav">Soumettre une Mission</Link></li>
                        </ul>
                    </li>
                        <li class="lvl1 parent dropdown">
                                   <Link :href="route('Allservices')">
                                            <span  class="dark:!text-white"  :class="{ 'lg:text-white': !isSticky && !isNotHome, 'lg:hidden': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">Services</span>

                                            <span class="dark:!text-white"  :class="{ 'hidden': !isNotHome }">Services</span>

                                    </Link>

                        </li>
                    <li class="lvl1 parent dropdown">
                        <Link  :href="route('home')">
                                <span class="dark:!text-white"  :class="{ 'lg:text-white': !isSticky && !isNotHome, 'lg:hidden': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">A propos</span>

                                <span class="dark:!text-white"  :class="{ 'hidden': !isNotHome }">A propos</span>

                        </Link>
                        <ul class="dropdown">
                             <li>
                                <Link :href="route('contact')">Contact</Link>
                            </li>
                            <li>
                                <Link :href="route('feedBack')">Feed back</Link>
                            </li>
                            <li>
                                    <Link :href="route('about')">A propos de nous</Link>
                                </li>
                            <li>

                                    <Link :href="route('faq')">Faq</Link>


                            </li>
                        </ul>
                    </li>

                    </ul>
                </nav>

                <div v-if="hoverOpen" @mouseleave="hoverOpen=false" class="absolute z-50 hidden w-full h-16 mx-auto right-4 top-16">

                    <div class="w-full h-24 max-w-5xl mx-auto mt-4 bg-red-300">

                    </div>

                </div>

            </div>

            <!--Mobile Logo-->
            <div class="block col-span-6 mx-auto lg:col-span-2 lg:hidden mobile-logo">
                <div class="logo">
                    <Link :href="route('home')">
                                <img v-show="!isNotHome" class="flex w-20 dark:hidden "   src="/images/logo/find_03.png" alt="logo-find" >
                                <img v-show="isNotHome" src="/images/logo/find_02.png" alt="logo-find" class="w-24">
                                <img v-show="!isNotHome"  class="hidden w-24 dark:flex" src="/images/logo/find_02.png" alt="logo-find">
                    </Link>
                </div>
            </div>
            <!--Mobile Logo-->
            <div class="flex items-center justify-end col-span-3 gap-2 lg:col-span-2 ">
                 <div v-if="$page.props.auth.user" class="flex items-center gap-4 ">



                             <CartComponent />












                        <div  class="hidden site-cart">
                            <button @click="isSearchBoxOpen = !isSearchBoxOpen" type="button" class="search-trigger">

                                        <svg v-show="isNotHome" class="hidden w-5 h-5 lg:block " :class="isSticky ? 'dark:!text-white' : '!text-white dark:!text-white'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <svg  v-show="!isNotHome" class="hidden w-5 h-5 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <svg  class="block w-5 h-5 text-gray-700 dark:text-white lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>


                                </button>


                        </div>

                        <div class="hidden lg:block">
                            <userInfo />
                        </div>
                </div>



                <div v-if="!$page.props.auth.user" class="flex items-center gap-6 ml-2" >


                    <Link :href="route('login')" class="relative items-center justify-center hidden w-full h-12 px-2 mx-auto text-base  bg-transparent rounded-full lg:flex group hover:scale-105 active:duration-75 active:scale-95 sm:w-max">


                                 <span  class="dark:!text-white"  :class="{ 'lg:text-white': !isSticky && !isNotHome, 'lg:hidden': isNotHome && !isSticky, 'hidden': isSticky && isNotHome }">Connexion</span>

                                                <span class="dark:!text-white text-gray-800"  :class="{ 'hidden': !isNotHome }">Connexion</span>

                            </Link>

                        <Link :href="route('register')"  class="relative items-center justify-center hidden w-full h-12 px-8 mx-auto rounded-full lg:flex bg-skin-fill group dark:bg-skin-fill hover:scale-105 active:duration-75 active:scale-95 sm:w-max">

                             <span
                                    class="relative text-base font-semibold text-white dark:text-white underline-none">S'inscrire</span>

                        </Link>

                        <Link :href="route('register')"  class="relative flex items-center justify-center h-10 px-4 mx-auto  text-sm duration-300 rounded-md lg:hidden bg-gray-50 before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max">

                                  <span class="relative text-base font-semibold text-amber-600">S'inscrire</span>

                            </Link>



                </div>

            </div>
        </div>
    </div>
</div>



    <div  v-show="navOpen" class="fixed inset-0 z-[400] bg-black bg-opacity-20 lg:hidden"
                style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)">
            </div>

            <Transition>


                <div  v-if="navOpen"
                    style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)"
                    class="fixed inset-0 bottom-0 left-0 z-[500] w-10/12 overflow-auto origin-left transform shadow-lg bg-gray-50 dark:bg-gray-800 custom-scrollbar lg:hidden">

                    <div
                        class="sticky top-0 z-20 flex justify-between h-24 p-2 bg-white border-b border-gray-700 dark:bg-gray-800 dark:border-gray-300 ">

                        <div class="flex p-3 mx-1 ">

                            <div v-if="$page.props.auth.user" class="flex w-full text-left">
                                <div class="flex-shrink-0">


                                <img v-if="$page.props.auth.user.profile_photo_path != null" class="w-12 h-12 rounded-full"
                                        :src="'/storage/'+$page.props.auth.user.profile_photo_path"
                                   alt="">

                                <img v-else class="w-16 h-16 rounded-full"
                                 :src="$page.props.auth.user.profile_photo_url" alt="">


                                </div>
                                <div class="px-4 py-3">
                                    <span class="block text-base text-gray-800 truncate dark:text-white ">{{ $page.props.auth.user.name }}</span>

                                </div>
                            </div>

                            <div v-else>
                            <Link :href="route('login')" @click="navOpen = false"
                                class="relative flex items-center justify-center w-full h-12 px-8 mx-auto duration-300 rounded-full dark:border dark:border-white bg-skin-fill before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max">
                                <span class="relative text-base font-semibold text-white">Connexion</span>
                            </Link>


                            </div>

                        </div>

                        <div class="text-left">


                            <button @click="navOpen = false" class="btn btn-sm btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div class="p-4 overflow-auto custom-scrollbar">
                        <div class="flex flex-col ">

                            <div class="flex-1 border-gray-800 dark:border-white custom-scrollbar">
                                <div class="pt-4 pb-3">
                                    <Link :href="route('home')"
                                        class="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                        <span class="ml-2">Accueil</span>
                                    </Link>
                                     <Link :href="route('register.begin')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-white hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>

                                        <span class="ml-2">Devenir Prestataire</span>
                                    </Link>


                                    <div class="relative">
                                        <button type="button" @click="open = !open"
                                            class="flex flex-row items-center w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                            </svg>

                                            <span class="ml-2">Categories</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-180': open, 'rotate-0': !open }"
                                                class="w-5 h-5 px-1 mt-1 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>

                                        <Collapse :when="open" class="flex flex-col px-2 py-2 rounded-md shadow-xs bg-inherit">
                                            <div v-for="category in categories" :key="category.id">
                                                <button @click="toggleAccordion(category.id)"
                                                    class="flex items-center justify-between w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600">

                                                    <span class="ml-3">{{ category.name }}</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-180': open, 'rotate-0': !open }"
                                                        class="w-6 h-6 px-1 mt-1 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </button>

                                                <collapse :when="expandedItems.includes(category.id)"
                                                    class="flex flex-col px-6 py-2 mt-2 rounded-md shadow-xs bg-inherit"
                                                    aria-orientation="vertical" aria-labelledby="user-menu" role="menuitem">

                                                     <Link :href="route('categoryName', category.name)" @click="navOpen = false"
                                                        class="flex flex-row items-center px-8 py-2 text-base font-medium text-gray-800 rounded-md mxr-4 dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                                        role="menuitem"> Tout sur
                                                        {{ category.name }}
                                                     </Link>

                                                     <div v-for="subcategory in category.subcategories" class="px-8">
                                                        <Link :href="route('SubcategoryName', [category.name, subcategory.name])" class="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200" :to="{ name: 'sub.name', params: { name: category.name, sub: subcategory.name } }">
                                                            {{ subcategory.name }}
                                                        </Link>
                                                     </div>



                                                </collapse>

                                            </div>






                                        </Collapse>
                                    </div>


                                    <Link :href="route('Allservices')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                        </svg>

                                        <span class="ml-2">Services</span>
                                    </Link>
                                    <Link :href="route('find_freelance')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                            </svg>

                                        <span class="ml-2">Trouver un Freelancer</span>
                                        </Link>

                                   <Link :href="route('createProject')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>

                                        <span class="ml-2">Soumettre une mission</span>
                                    </Link>


                                    <Link :href="route('about')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>

                                        <span class="ml-2">Apropos</span>
                                    </Link>
                                   <Link :href="route('faq')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                        </svg>

                                        <span class="ml-2">Foire aux Questions</span>
                                    </Link>


                                <button
                                    class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white "
                                    @click="ToggleDark" aria-label="Toggle color mode">
                                    <template v-if="!isDark">
                                        <svg class="w-5 h-5 text-gray-800" aria-hidden="true" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                                            </path>
                                        </svg>
                                    </template>
                                    <template v-else>
                                        <svg class="w-5 h-5 text-gray-200" aria-hidden="true" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </template>
                                    <span v-if="!isDark" class="ml-2 text-gray-800">Sombre</span>
                                    <span v-else class="ml-2 text-gray-200">Clair</span>
                                </button>

                                </div>
                            </div>

                        <div v-if="$page.props.auth.user" class="container mt-4 border-t border-gray-800 dark:border-gray-50 ">
                            <div class="pt-2 pb-3">
                                  <Link :href="route('user.dashboard')" @click="navOpen = false"
                                        class="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        role="menuitem">
                                         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                                        </svg>
                                        <span class="ml-2">Dashboard</span>
                                    </Link>
                                <Link :href="route('user.profile')" @click="navOpen = false"
                                    class="flex flex-row items-center px-2 py-2 text-base font-medium text-gray-800 rounded-md dark:text-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                    role="menuitem">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                       >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <span class="ml-2">profile</span>
                                </Link>
                                  <Link :href="route('user.chat')" @click="navOpen = false"
                                        class="flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600"
                                        role="menuitem">

                                       <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                    </svg>
                                        <span class="ml-2">Conversation </span>
                                </Link>
                                 <template v-if="$page.props.auth.freelance">
                                   <Link :href="route('freelance.dashboard')" @click="navOpen = false"
                                            class="flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600"
                                            role="menuitem">

                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                               >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            <span class="ml-2">Dashboard freelance</span>
                                    </Link>
                                       <Link :href="route('freelance.chat')" @click="navOpen = false"
                                                class="flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600"
                                                role="menuitem">

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                   >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                                <span class="ml-2">Conversation freelance</span>
                                        </Link>

                                    </template>




                                <form @submit.prevent="logout">


                                    <button type="submit"
                                        class="flex flex-row items-center px-4 py-2 text-red-500 text-md hover:text-red-700 hover:bg-red-100 focus:outline-none focus:text-red-700 focus:bg-red-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                           >
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                        Deconnexion
                                    </button>
                                </form>

                            </div>
                        </div>


                        </div>
                    </div>


                </div>
                </Transition>




    </div>
</template>

<script setup>

import {ref, watch,computed, onMounted } from 'vue';
import { Link, usePage, router } from '@inertiajs/vue3';
import { useDark, useToggle } from '@vueuse/core';
//import { usePrimeVue } from 'primevue/config';
import userInfo from '@/Components/userInfo.vue';
import { Collapse } from 'vue-collapsed';
import CartComponent from '@/Components/CartComponent.vue';

import { useSubcategoriesStore, useCategoryStore } from '@/store/store';

//import pkg from 'primevue/config/config.esm.js';
//const { usePrimeVue } = pkg;


//const PrimeVue = usePrimeVue();
const page = usePage();

const isDark = useDark();
const dark = useToggle(isDark);
const ToggleDark = () => {
    dark();
    if (isDark.value) {
        toggleTheme("lara-light-blue")
    } else {
        toggleTheme("lara-dark-blue")
    }
};

const logout = () => {
    router.post(route('logout'));
};

const categoriesStore = useCategoryStore();
const subcategoriesStore = useSubcategoriesStore();

const categories = computed(() => categoriesStore.categoriesGet.categories);



const toggleTheme = (current) => {
    let nextTheme = 'lara-light-blue';
    let linkElement = 'light';
    if (current === 'lara-light-blue') nextTheme = 'lara-dark-blue';
    else if (current === 'lara-dark-blue') nextTheme = 'lara-light-blue';

   // PrimeVue.changeTheme(current, nextTheme, 'light', () => { });
}



const isSSR = ref(true);

onMounted(() => {
    isSSR.value = false; // Changer la valeur à false côté client
});



const open = ref(false);
const navOpen = ref(false);
const isSearchBoxOpen = ref(false);
const isSticky = ref(false);

const hoverOpen = ref(false);

const isNotHome = computed(()=>{
    return  page.url === '/' ? false : true;
});

const toogleNav = () => {

    navOpen.value = !navOpen.value

}

const expandedItems = ref([]);

const toggleAccordion = (key) => {

    if (expandedItems.value.includes(key)) {
        expandedItems.value = expandedItems.value.filter((item) => item !== key);
        console.log(expandedItems.value)
    } else {
        expandedItems.value.push(key);
    }
};









// Écoutez les changements de la variable isNotHome dans le store













function handleScroll() {

    if( typeof window !== "undefined"){

    if (window.innerWidth > 1199) {
        if (window.scrollY > 145) {
            isSticky.value = true;
            // Ajoutez d'autres modifications nécessaires ici
        } else {
            isSticky.value = false;
            // Ajoutez d'autres modifications nécessaires ici
        }
    }
    }
}

if(typeof window !== "undefined"){

    window.addEventListener('scroll', handleScroll);
}


</script>

<style  scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-40px); /* Ajustez cette valeur selon vos besoins */
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0);
}

</style>
