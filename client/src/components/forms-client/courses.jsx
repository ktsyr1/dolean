let Coursecard = () => {
  return (

    <div class="max-w-md mx-auto p-4  *:text-zinc-800">
      
      <main>
        <h2 class="text-center text-2xl font-bold mb-4">الدورات الحديثة</h2>
       <Card />
       
       <Card />
       <Card />
       <Card />
       <Card />
        <button class="inline-flex items-center bg-slate-100 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full mt-4">
          مشاهدة كل الدورات المتاحة
        </button>
      </main>
    </div>
  )
}
export default Coursecard

function Card(){
  return (
    <div
    class="bg-card flex items-center justify-between m-4 rounded-lg space-x-4 text-card-foreground"
    data-v0-t="card"
  >
    <div>
      <h3 class="text-lg font-semibold">Machine Learning for Everyone</h3>
      <p class="text-sm text-muted-foreground">University of London</p>
      <div
        class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        data-v0-t="badge"
      >
        اونلاين
      </div>
    </div>
    <img
      src="https://www.w3schools.com/REACT/screenshot_myfirstreact.png"
      alt="Course"
      class="w-20 h-20 object-cover rounded-md"
      width="80"
      height="80"
      style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
    />
  </div>
  )
}
