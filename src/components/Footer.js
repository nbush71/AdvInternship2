function Footer() {
  return (
   <footer className="grid grid-cols-1 w-375 max-w-full">
      <div className="grid grid-cols-4 gap-4 bg-brand-footer">
        <div className="grid w-300 max-w-375 h-auto pb-20 pt-20 pl-20 pr-0 m-auto justify-between grid-rows-1 place-content-center">
          <div className="flex flex-4 justify-between content-center md:min-w-325 place-content-center">
            <div className="block justify-between text-[14px] content-center ">
              <div className="font-bold text-3xl pb-6 text-brand-darkteal">Actions</div>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Summarist Magazine</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Cancel Subscription</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Help</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Contact us</a>
                </div>
              </div>
            </div>

            <div className="block gap-6 justify-between">
              <div className="font-bold text-3xl text-brand-darkteal pb-6">Useful Links</div>
              <div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Pricing</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Summarist Business</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Gift Cards</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Authors & Publishers</a>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="font-bold text-3xl text-brand-darkteal pb-6">Company</div>
              <div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">About</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Careers</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Partners</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Code of Conduct</a>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="font-bold text-3xl text-brand-darkteal pb-6">Other</div>
              <div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Sitemap</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Legal Notice</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Terms of Service</a>
                </div>
                <div className="mb-4">
                  <a className="text-xl text-brand-links cursor-not-allowed" href="#">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center content-center place-content-center mt-8 ">
            <div className="flex w-full max-w-300 place-content-center text-2xl font-bold text-brand-darkteal">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;