function Footer() {
  return (
    <footer className="w-full bg-brand-footer">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="grid w-full grid-cols-1 gap-8 tablet:grid-cols-2 laptop:grid-cols-4">
          <div>
            <div className="font-bold text-2xl pb-6 text-brand-darkteal">Actions</div>
            <div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Summarist Magazine</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Cancel Subscription</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Help</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Contact us</a>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-2xl text-brand-darkteal pb-6">Useful Links</div>
            <div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Pricing</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Summarist Business</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Gift Cards</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Authors & Publishers</a>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-2xl text-brand-darkteal pb-6">Company</div>
            <div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">About</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Careers</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Partners</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Code of Conduct</a>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-2xl text-brand-darkteal pb-6">Other</div>
            <div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Sitemap</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Legal Notice</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Terms of Service</a>
              </div>
              <div className="mb-4">
                <a className="text-lg text-brand-links cursor-not-allowed" href="#">Privacy Policies</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xl font-bold text-brand-darkteal">
          Copyright &copy; 2023 Summarist.
        </div>
      </div>
    </footer>
  )
}

export default Footer;