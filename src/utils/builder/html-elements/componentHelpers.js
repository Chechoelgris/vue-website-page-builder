//
//
//
const componentHelpers = [
  {
    html_code: `
      <section>
        <div class="relative bg-white">
          <div class="navbar-container">
            <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <!-- Logo -->
              <div class="flex justify-start lg:w-0 lg:flex-1">
                <div class="flex items-center">
                  <img class="h-8 w-auto sm:h-10" src="/placeholder-logo.png" alt="Logo">
                </div>
              </div>

              <!-- Navigation Links -->
              <nav class="hidden space-x-10 md:flex">
                <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Inicio</a>
                <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Servicios</a>
                <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Nosotros</a>
                <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Contacto</a>
              </nav>

              <!-- CTA Button -->
              <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-myPrimaryLinkColor px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700">
                  Contactar
                </a>
              </div>

              <!-- Mobile menu button -->
              <div class="-my-2 -mr-2 md:hidden">
                <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <span class="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    id: null,
    title: 'Navigation Bar',
    icon: `
      <span class="material-symbols-outlined">
        menu
      </span>
    `
  },
  {
    html_code: `
        <section>
        <div class="relative py-4">
        <div class="mx-auto max-w-7xl lg:px-4 px-2">
        <div>
        <p><strong>Text</strong></p><p>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Erat nam at lectus urna duis convallis convallis. Congue mauris rhoncus aenean vel elit scelerisque. 
        Turpis tincidunt id aliquet risus feugiat in ante. Tincidunt dui ut ornare lectus sit. Ipsum dolor sit amet consectetur. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.<br><br>Dignissim sodales ut eu sem integer vitae justo eget magna. 
        Ac turpis egestas maecenas pharetra convallis. Mauris sit amet massa vitae. Ut tellus elementum sagittis vitae et. Sed risus ultricies tristique nulla aliquet enim tortor. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Quis vel eros donec ac odio tempor. 
        Faucibus scelerisque eleifend donec pretium. <br><br>Adipiscing bibendum est ultricies integer quis auctor elit. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget. Gravida dictum fusce ut placerat orci nulla. 
        Consequat mauris nunc congue nisi vitae suscipit tellus mauris. <br><br></p><p><strong>List</strong></p><ul><li><p>Integer enim neque volutpat ac tincidunt vitae semper quis. Sit amet consectetur adipiscing elit pellentesque.</p></li><li><p>Urna cursus eget nunc scelerisque viverra. 
        Cursus metus aliquam eleifend mi in nulla posuere. Lobortis elementum nibh tellus molestie nunc non blandit massa.</p></li><li><p>Sodales ut eu sem integer vitae justo eget magna. Scelerisque felis imperdiet proin fermentum leo vel orci. Nunc id cursus metus aliquam eleifend.</p></li></ul>
        </div>
        </div>
        </div>
        </section>`,
    id: null,
    title: 'Text',
    icon: `
        <span class="material-symbols-outlined">
        text_fields
        </span>
        `,
  },
  {
    html_code: `<section><div class="relative py-4"><div class="mx-auto max-w-7xl lg:px-4 px-2"><div class="break-words"><h2>Consequat mauris nunc congue</h2></div></div></div></section>`,
    id: null,
    title: 'Header H2',
    icon: `
        <span class="material-symbols-outlined">
        format_h2
        </span>
        `,
  },
  {
    html_code: `<section><div class="relative py-4"><div class="mx-auto max-w-7xl lg:px-4 px-2"><div class="break-words"><h3>Consequat mauris nunc congue</h3></div></div></div></section>`,
    id: null,
    title: 'Header H3',
    icon: `
        <span class="material-symbols-outlined">
        format_h3
        </span>
        `,
  },
  {
    html_code: `
        <section>
        <div class="py-4">
        <div class="mx-auto max-w-7xl lg:px-4 px-2">
        <div id="youtube-video" class="w-full aspect-video bg-slate-100 border border-slate-200 rounded-xl lg:p-8 md:p-6 p-4">
     
        <iframe
        frameborder="0" 
        allowfullscreen
        class="w-full aspect-video bg-gray-600 border border-slate-800 rounded-xl"
        src="" 
        allow="accelerometer; autoplay; clipboard-write;" allowfullscreen>
        </iframe>
        </div>
        </div>
        </div>
        </section>`,
    id: null,
    title: 'YouTube Video',
    icon: `
        <span class="material-symbols-outlined">
        play_circle
        </span>
        `,
  },
  {
    html_code: `<section><div class="relative py-8"><div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="w-full border-4 border-gray-800 leading-none"></div></div><div class="relative flex justify-start"></div></div></section>`,
    id: null,
    title: 'Break Divider',
    icon: `
        <span class="material-symbols-outlined">
        horizontal_rule
        </span>
        `,
  },
  {
    html_code: `<section>\n<div class=\"w-full md:pt-2 md:pb-2 pt-4 pb-4 lg:px-4 px-2\">\n<div class=\"mx-auto max-w-7xl\">\n<div id=\"linktree\"\nclass=\"border-2 border-gray-600 flex items-centre justify-start rounded-md font-medium text-black\">\n<p>\n<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://www.google.com\">Link to landing page</a>\n</p>\n</div>\n</div>\n</div>\n</section>`,
    id: null,
    title: 'Link',
    icon: `
        <span class="material-symbols-outlined">
        horizontal_rule
        </span>
        `,
  },
];

export default componentHelpers;
