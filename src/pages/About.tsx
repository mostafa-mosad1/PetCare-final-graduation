function About() {
  return (
    <>
      <div className="text-center p-4  space-y-10 md:h-96 my-4  flex flex-col justify-center items-center rounded-md border border-foreground">
        <div className="">
          <h2 className="text-4xl font-bold">Pet Care</h2>
          <p className="w-[50%] h-1 bg-foreground my-2 mx-auto"></p>
        </div>

        <p className="md:text-2xl">
          It's a website that provides all what you need, we provide a shop
          which you can pets, food, accessories, and treatment. We also provide
          a category which you can know types of pets to choose best pet for
          you. You can communicate with doctor to book appointment to treat your
          pet, and you have a profile to add and modify your info. and your
          pets.
        </p>
      </div>
    </>
  );
}

export default About;
