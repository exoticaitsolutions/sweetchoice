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
          <footer className="footer w-full bg-[url('/assets/footer-bg.png')] bg-cover bg-center">
            {/* {footer?.menu && header.shop.primaryDomain?.url && (
              <FooterMenu
                menu={footer.menu}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
            )} */}
            <div className='footer-menu flex'>
                <div>
                <h4 className="text-white">Company</h4>
                <div className='secondary-footer-menu flex'>
              
                  <nav className="px-4 py-2">
          
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      Products
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      Privacy Policy
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      Terms Of Use
                    </NavLink>

                  </nav>
             
                </div>
                </div>
                <div>
                <h4 className="text-white">Collections</h4>
                <div className='secondary-footer-menu flex'>

                    <nav className="px-4 py-2">

                      <NavLink
                        to="/collections"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2"
                      >
                        Shop
                      </NavLink>
                      <NavLink
                        to="/holidays"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2"
                      >
                        Holidays
                      </NavLink>
                      <NavLink
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2"
                      >
                        About
                      </NavLink>

                    </nav>
                    <nav className="px-4 py-2">

                        <NavLink
                          to="/collections/christmas"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2"
                        >
                          Christmas
                        </NavLink>
                        <NavLink
                          to="/collections/valentines"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2"
                        >
                          Valentine's Day
                        </NavLink>
                        <NavLink
                          to="/collections/easter"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2"
                        >
                          Easter
                        </NavLink>

                      </nav>
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

