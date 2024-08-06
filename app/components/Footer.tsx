import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
   
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer w-full bg-[#fff8ee] pt-14 pb-10">
            {/* {footer?.menu && header.shop.primaryDomain?.url && (
              <FooterMenu
                menu={footer.menu}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
            )} */}
            <div className='container mx-auto'>
              <div className='footer-logo text-center relative'>
                <img src='/assets/logos/sc-logo.svg'  className='m-auto'/>
              </div>
              <div className='footer-tag '>
                <hr className='border-black-200' />
              </div>
            <div className='footer-menu flex relative justify-between mt-5 '>
                <div className=''>
                <h4 className="text-black text-xl font-extrabold">Company</h4>
                <div className='secondary-footer-menu flex'>
              
                  <nav className="">
          
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-base text-black"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-base text-black"
                    >
                      Products
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-base text-black"
                    >
                      Privacy Policy
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-base text-black"
                    >
                      Terms Of Use
                    </NavLink>

                  </nav>
             
                </div>
                </div>
                <div className=''>
                <h4 className="text-black text-xl font-extrabold">Collections</h4>
                <div className='secondary-footer-menu flex'>

                    <nav className="mr-20">

                      <NavLink
                        to="/collections"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 block  text-base text-black"
                      >
                        Shop
                      </NavLink>
                      <NavLink
                        to="/holidays"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 block text-base"
                      >
                        Holidays
                      </NavLink>
                      <NavLink
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 block  text-base text-black"
                      >
                        All Year 
                      </NavLink>
                      <NavLink
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 block  text-base text-black"
                      >
                        About
                      </NavLink>

                    </nav>
                    <nav className="">

                        <NavLink
                          to="/collections/christmas"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-4 block  text-base text-black"
                        >
                          Christmas
                        </NavLink>
                        <NavLink
                          to="/collections/valentines"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-4 block  text-base text-black"
                        >
                          Valentine's Day
                        </NavLink>
                        <NavLink
                          to="/collections/easter"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-4 block  text-base text-black"
                        >
                          Easter
                        </NavLink>
                        <NavLink
                          to="/collections/easter"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-4 block  text-base text-black"
                        >
                          Halloween
                        </NavLink>

                      </nav>
                </div>
                </div>
                <div className=''>
                <h4 className="text-black text-xl font-extrabold ">Newsletter</h4>
                <div className='secondary-footer-menu flex mt-6'>

                    <nav className="">
                        <p className='block py-2 block py-2 text-base text-black max-w-xs mb-6'>Subscribe our Newsletter to get the latest 
                        news and insights</p>
                <div className='footer-form flex items-center gap-3'>
                     <div class="">
                   <input type="email" id="email" name="email" placeholder="Enter your email"
                    class="w-80 px-4 m-0 border border-black  focus:outline-none focus:border-black bg-transparent text-black placeholder-black"/>
                    </div>
                    <div className='submit-btn'>
                    <button type="submit" class="w-32 text-xl font-semibold px-12 py-2 border-2 border-black 
                  text-black bg-transparent
                  shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
                  transition-shadow duration-200 
                  flex items-center justify-center 
                  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
        Submit
      </button>
                    </div>
                </div>
                <div className='mt-10'>
                  <p className='block py-2 block py-2 text-base text-black'>By subscribing, you accept the Privacy Policy
                  </p>
                </div>
                      </nav>
                </div>
                </div>
            
             
           
            </div>
            <div className='flex justify-between items-center relative mt-16'>
              <div className=''>
                <p className='block py-2 text-base text-black'>Copyright © 2024. All Rights Reserved</p>
              </div>
              <div className=''>
                <ul className='flex items-center p-0 gap-3'>
                  <li className='text-xl text-black font-extrabold uppercase'>Facebook  - </li>
                  <li className='text-xl text-black font-extrabold uppercase'>Twitter  - </li>
                  <li className='text-xl text-black font-extrabold uppercase'>Insta  - </li>
                  <li className='text-xl text-black font-extrabold uppercase'>Youtube  - </li>
                </ul>
              </div>
            </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: ['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

