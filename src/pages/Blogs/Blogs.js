import React from "react";

const Blogs = () => {
  return (
    <div className="px-6">
      <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1">
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-xl">
        Question-1: How will you improve the performance of a React Application?
      </h2>
      <p>
        Ans: We can't begin to optimize an app without knowing exactly when and
        where to optimize. You might be asking, “Where do we start?” During the
        initial rendering process, React builds a DOM tree of components. So,
        when data changes in the DOM tree, we want React to re-render only those
        components that were affected by the change, skipping the other
        components in the tree that were not affected. However, React could end
        up re-rendering all components in the DOM tree, even though not all are
        affected. This will result in longer loading time, wasted time, and even
        wasted CPU resources. We need to prevent this from happening. So, this
        is where we will focus our optimization effort. In this situation, we
        could configure every component to only render or diff when necessary,
        to avoid wasting resources and time.Keeping component state local where
        necessary.Memoizing React components to prevent unnecessary
        re-renders.Data immutability is not an architecture or design pattern,
        it's an opinionated way of writing code. This forces you to think about
        how you structure your application data flow. In my opinion, data
        immutability is a practice that revolves around a strict unidirectional
        data flow. Data immutability, which comes from the functional
        programming world, can be applied to the design of front-end.
      </p>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-xl">
        Question-2: What are the different ways to manage a state in a React
        application?
      </h2>
      <p>
        Ans: The Best React State Management Tools for Enterprise Applications
        State management in React has been a hotly debated topic for years, yet
        little attention seems to be paid to enterprise-level applications and
        their specific requirements. Let's take a closer look and compare three
        of the most popular state management tools available today.When we talk
        about state in our applications, it's important to be clear about what
        types of state actually matter. There are four main types of state you
        need to properly manage in your React apps: 1.Local state 2.Global state
        3.Server state 4.URL state. At first, it seems you just need to fetch
        data and display it in the page. But then you need to display a loading
        spinner while you are waiting for the data. Then you need to handle
        errors and display them to the user as they arise. What happens when
        there is a network error? Do I really need to hit my server every time
        my user visits the home page if the data hasn't changed? Do I need to
        add useState and useEffect in every component I want to fetch my data?
      </p>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-xl">
        Question-3: How does prototypical inheritance work?
      </h2>
      <p>
        Ans: If you've worked with other object-oriented programming languages
        such as Java or C++, you've been familiar with the inheritance concept.
        In this programming paradigm, a class is a blueprint for creating
        objects. If you want a new class to reuse the functionality of an
        existing class, you can create a new class that extends the existing
        class. This is called classical inheritance. JavaScript doesn't use
        classical inheritance. Instead, it uses prototypal inheritance. In
        prototypal inheritance, an object “inherits” properties from another
        object via the prototype linkage.The Prototypal Inheritance is a feature
        in javascript used to add methods and properties in objects. It is a
        method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the Prototype of
        an object, we use Object. getPrototypeOf and Object.In JavaScript, an
        object can inherit properties of another object. The object from where
        the properties are inherited is named prototype.
      </p>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-xl">
        Question-4: You have an array of products. Each product has a name,
        price, description, etc. How will you implement a search to find
        products by name?
      </h2>
      <p>
        Ans: Arrays Objects allow you to store keyed collections of values.
        That's fine. But quite often we find that we need an ordered collection,
        where we have a 1st, a 2nd, a 3rd element and so on. For example, we
        need that to store a list of something: users, goods, HTML elements etc.
        It is not convenient to use an object here, because it provides no
        methods to manage the order of elements. We can't insert a new property
        “between” the existing ones. Objects are just not meant for such use.
        There exists a special data structure named Array, to store ordered
        collections.Map, reduce, and filter are all array methods in JavaScript.
        Each one will iterate over an array and perform a transformation or
        computation. Each will return a new array based on the result of the
        function. In this article, you will learn why and how to use each
        one.The map() method is used for creating a new array from an existing
        one, applying a function to each one of the elements of the first
        array.The filter() method takes each element in an array and it applies
        a conditional statement against it. If this conditional returns true,
        the element gets pushed to the output array. If the condition returns
        false, the element does not get pushed to the output array.
      </p>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-xl">
        Question-5: What is a unit test? Why should write unit tests?
      </h2>
      <p>
        Ans: Unit testing is performed during the coding stage of a software
        development project to test individual units of the application. It's
        designed to test that each unit of the software code performs as
        required. A unit might be a class or class method in object-oriented
        languages and a procedure or function in procedural and functional
        software languages. Unit tests need to run quickly, so they run in
        isolation without external processes or systems.A unit test is a way of
        testing a unit the smallest piece of code that can be logically isolated
        in a system. In most programming languages, that is a function, a
        subroutine, a method or property. The isolated part of the definition is
        important. In his book Working Effectively with Legacy Code", author
        Michael Feathers states that such tests are not unit tests when they
        rely on external systems If it talks to the database, it talks across
        the network, it touches the file system, it requires system
        configuration, or it can't be run at the same time as any other test.
        Modern versions of unit testing can be found in frameworks like JUnit,
        or testing tools like TestComplete. Look a little further and you will
        find SUnit, the mother of all unit testing frameworks created by Kent
        Beck, and a reference in chapter 5 of The Art of Software Testing .
        Before that, it's mostly a mystery. I asked Jerry Weinberg about his
        experiences with unit testing We did unit testing in 1956. As far as I
        knew, it was always done, as long as there were computers. Regardless of
        when and where unit testing began, one thing is for sure. Unit testing
        is here to stay. Let's look at some more practical aspects of unit
        testing.Writing software unit test code provides quick, almost
        instantaneous feedback about the correctness of the coding, including
        its design and implementation. Test passes and test fails confirm if the
        software works or doesn't work as intended and can update its vetting
        every time someone changes a specific piece of code.Unit testing allows
        the programmer to refactor code at a later date, and make sure the
        module still works correctly. The procedure is to write test cases for
        all functions and methods so that whenever a change causes a fault, it
        can be quickly identified and fixed.
      </p>
          </div>
        </div>
      </div>
    

      
    
    
    </div>
  );
};

export default Blogs;
