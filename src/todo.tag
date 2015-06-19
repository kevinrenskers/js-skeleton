<todo>
  <h3>{ opts.title }</h3>

  <ul>
    <li each={ items }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
      </label>
    </li>
  </ul>

  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Add #{ items.length + 1 }</button>
  </form>

  <style scoped>
    h3 {
      color: purple;
    }

    .completed {
      text-decoration: line-through;
    }
  </style>

  <script>
    this.disabled = true;

    this.items = opts.items;

    edit(e) {
      this.text = e.target.value;
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text });
        this.text = this.input.value = '';
      }
    }

    toggle(e) {
      var item = e.item;
      item.done = !item.done;
      return true;
    }
  </script>
</todo>
