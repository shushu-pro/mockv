import { getCnAreaData } from 'cn-area-data';

import * as mockv from '../src';

mockv.load({ cnAreaData: getCnAreaData() });

(function () {
  document.body.innerHTML = `
    <h3>切换选项查看mock数据</h3>
    <select>
      ${Object.keys(mockv).map((key) => {
        return `<option>${key}</option>`;
      })}
    </select>

    <input id="code" style="width:200px" />
    <button id="run">刷新数据</button>
    <div id="mockValue" style="padding:10px">&nbsp;</div>
    <span style="font-size:12px;color:red;font-weight:normal;">
      部分接口需要参数，请查看文档：<a href="https://github.com/shushu-pro/mockv" target="_blank">https://github.com/shushu-pro/mockv</a>
    </span>
  `;

  const mockValue = document.getElementById('mockValue');

  document.getElementsByTagName('select')[0].onchange = function () {
    const key = this.value;

    document.getElementById('code').value = `mockv.${key}()`;

    try {
      showMock(mockv[key]());
    } catch (e) {
      mockValue.innerHTML = `<span style="color:red;">${'请输入参数'}</span>`;
    }
  };

  document.getElementById('code').onblur = function () {
    // eslint-disable-next-line no-new-func
    showMock(new Function('mockv', `return ${this.value}`)(mockv));
  };

  document.getElementById('run').onclick = function () {
    showMock(
      // eslint-disable-next-line no-new-func
      new Function('mockv', `return ${document.getElementById('code').value}`)(
        mockv
      )
    );
  };

  function showMock(value) {
    mockValue.innerHTML = JSON.stringify(value);
  }
})();
