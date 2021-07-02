<script>
    export let errMsg = ''
</script>

<!-- <div class="relative bg-indigo-800"> -->
  <div class="bg-white pt-4 lg:py-24">
    <div class="pb-16 bg-white lg:pb-0 lg:z-10 lg:relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="mt-4 lg:m-0 lg:col-span-2 lg:pl-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <p class="mt-4 text-1l font-medium text-black">
                  Bummer! {errMsg}
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>