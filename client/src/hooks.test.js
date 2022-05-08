import { IMG_TEXT_TYPE, IMG_TYPE, MULTI_IMG_TYPE, TEXT_TYPE, UNSUPPORT_TYPE, useBubbleType } from "./hooks";
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('useBubbleType', () => {
  test('null msg should return unsupport type', () => {
    const nullMsg = null;

    function App() {
      const bubbleType = useBubbleType(nullMsg);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(UNSUPPORT_TYPE);
  })

  test('null text and null attachment should return unsupport type', () => {
    const nullTextMsgWithNullAttachment = {
      text: null,
      attachments: null
    };

    function App() {
      const bubbleType = useBubbleType(nullTextMsgWithNullAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(UNSUPPORT_TYPE);
  })

  test('empty text and null attachment should return unsupport type', () => {
    const emptyTextMsgWithNullAttachment = {
      text: "",
      attachments: null
    };

    function App() {
      const bubbleType = useBubbleType(emptyTextMsgWithNullAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(UNSUPPORT_TYPE);
  })

  test('text and null attachment should return text type', () => {
    const textWithNullAttachment = {
      text: "test",
      attachments: null
    };

    function App() {
      const bubbleType = useBubbleType(textWithNullAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(TEXT_TYPE);
  })

  test('null text and empty attachment should return unsupport type', () => {
    const nullTextWithEmptyAttachment = {
      text: null,
      attachments: []
    };

    function App() {
      const bubbleType = useBubbleType(nullTextWithEmptyAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(UNSUPPORT_TYPE);
  })

  test('null text and an attachment should return img type', () => {
    const nullTextWithOneAttachment = {
      text: null,
      attachments: ['testUrl']
    };

    function App() {
      const bubbleType = useBubbleType(nullTextWithOneAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(IMG_TYPE);
  })

  test('null text and multi attachments should return multi img type', () => {
    const nullTextWithMultiAttachment = {
      text: null,
      attachments: ['testUrl', 'testUrl']
    };

    function App() {
      const bubbleType = useBubbleType(nullTextWithMultiAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(MULTI_IMG_TYPE);
  })

  test('empty text and empty attachment should return unsupport type', () => {
    const emptyTextWithEmptyAttachment = {
      text: "",
      attachments: []
    };

    function App() {
      const bubbleType = useBubbleType(emptyTextWithEmptyAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(UNSUPPORT_TYPE);
  })

  test('empty text and an attachment should return img type', () => {
    const emptyTextWithOneAttachment = {
      text: "",
      attachments: ['testUrl']
    };

    function App() {
      const bubbleType = useBubbleType(emptyTextWithOneAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(IMG_TYPE);
  })

  test('empty text and multi attachments should return multi img type', () => {

    const emptyTextWithMultiAttachment = {
      text: "",
      attachments: ['testUrl', 'testUrl']
    };

    function App() {
      const bubbleType = useBubbleType(emptyTextWithMultiAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(MULTI_IMG_TYPE);
  })

  test('text and empty attachment should return text type', () => {

    const textWithEmptyAttachment = {
      text: "test",
      attachments: []
    };


    function App() {
      const bubbleType = useBubbleType(textWithEmptyAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(TEXT_TYPE);
  })

  test('text and an attachment should return img text type', () => {

    const textWithOneAttachment = {
      text: "test",
      attachments: ['testUrl']
    };

    function App() {
      const bubbleType = useBubbleType(textWithOneAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(IMG_TEXT_TYPE);
  })

  test('text and an attachment should return unsupport type', () => {
    const textWithMultiAttachment = {
      text: "test",
      attachments: ['testUrl', 'testUrl']
    };

    function App() {
      const bubbleType = useBubbleType(textWithMultiAttachment);
      return bubbleType;
    }

    const el = document.createElement('div');

    act(() => {
      ReactDOM.render(<App />, el);
    })

    expect(el.innerHTML).toBe(UNSUPPORT_TYPE);
  })
})