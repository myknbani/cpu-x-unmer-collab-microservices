---
# try also 'default' to start simple
theme: unicorn
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
layout: intro
introImage: https://cdn.solace.com/wp-content/uploads/2020/05/microservices-300x300.png
---

# Microservices

## Experience the Basics in 30 minutes

### CPU * UNMER

##### Batch 3: Session 5

<div id="logos">
  <img alt="cpu" src="/cpu.png" /> <img alt="unmer" src="/unmer.png" />
</div>

<style>
  #logos {
    display: inline;
  }

  #logos img {
    display: inline;
    margin-top: 32px;
    width: 96px !important;
    height: 96px !important;
  }

  h3 {
    margin-top: 16px;
  }
</style>

---
src: ./preface/intro.md
---
---
src: ./preface/expect.md
---
---
src: ./preface/agenda.md
---
---
src: ./preface/monolithic.md
---
---
src: ./preface/microservice.md
---
---
src: ./preface/what.md
---
---
src: ./preface/triangle.md
---
---
src: ./preface/adoption.md
---
---
src: ./preface/undergrads.md
---

---
src: ./patterns/new-section.md
---
---
src: ./patterns/decompose.md
---
---
src: ./patterns/db-per-service.md
---
---
src: ./patterns/shared-db.md
---
---
src: ./patterns/api-composition.md
---
---
src: ./patterns/workshop.md
---
---
src: ./patterns/antipattern.md
---
---
src: ./patterns/outro.md
---
