export default [
  {
    title: '定位布局',
    rows: [
      {
        name: 'position',
        list: [
          {label: 'relative', value: [{name: 'position', value: 'relative'}]},
          {label: 'absolute', value: [{name: 'position', value: 'absolute'}]}
        ]
      },
      {
        name: 'flex',
        list: [
          {
            label: 'flex row',
            value: [
              {name: 'flex', value: '1'},
              {name: 'min-width', value: '0'}
            ]
          },
          {
            label: 'flex column',
            value: [
              {name: 'flex', value: '1'},
              {name: 'min-height', value: '0'}
            ]
          }
        ]
      }
    ]
  },
  {
    title: '属性',
    rows: [
      {
        name: 'width',
        define: true,
        list: [
          {label: '100%', value: [{name: 'width', value: '100%'}]}
        ]
      },
      {
        name: 'height',
        define: true,
        list: [
          {label: '100%', value: [{name: 'height', value: '100%'}]}
        ]
      },
      {
        name: 'margin',
        multiple: true,
        define: true,
        list: [
          {
            label: '1',
            value: [
              {name: 'margin', value: '10px'}
            ]
          },
          {
            label: '2',
            value: [
              {name: 'margin', value: '10px 20px'}
            ]
          },
          {
            label: '4',
            value: [
              {name: 'margin', value: '10px 20px 10px 20px'}
            ]
          },
          {
            label: 'top',
            value: [
              {name: 'margin-top', value: '10px'}
            ]
          },
          {
            label: 'right',
            value: [
              {name: 'margin-right', value: '10px'}
            ]
          },
          {
            label: 'bottom',
            value: [
              {name: 'margin-bottom', value: '10px'}
            ]
          },
          {
            label: 'left',
            value: [
              {name: 'margin-left', value: '10px'}
            ]
          }
        ]
      },
      {
        name: 'border',
        define: true,
        list: [
          {
            label: 'border',
            value: [
              {name: 'border', value: '1px solid #666'}
            ]
          },
          {
            label: 'border-radius',
            value: [
              {name: 'border-radius', value: '4px'}
            ]
          }
        ]
      },
      {
        name: 'background-color',
        define: true,
        list: [
          {label: '#000', color: true, value: [{name: 'background-color', value: '#000'}]},
          {label: '#fff', color: true, value: [{name: 'background-color', value: '#fff'}]}
        ]
      },
      {
        name: 'background-image',
        list: [
          {
            label: 'cover', value: [
              {name: 'background-size', value: 'cover'},
              {name: 'background-repeat', value: 'no-repeat'},
              {name: 'background-position', value: 'center'}
            ]
          },
          {
            label: 'contain', value: [
              {name: 'background-size', value: 'contain'},
              {name: 'background-repeat', value: 'no-repeat'},
              {name: 'background-position', value: 'center'}
            ]
          }
        ]
      }
    ]
  },
  {
    title: '字体',
    rows: [
      {
        name: 'color',
        define: true,
        list: [
          {label: '#000', color: true, value: [{name: 'color', value: '#000'}]},
          {label: '#f90', color: true, value: [{name: 'color', value: '#f90'}]},
          {label: '#666', color: true, value: [{name: 'color', value: '#666'}]}
        ]
      },
      {
        name: 'font-size',
        define: true,
        list: [
          {label: '12px', value: [{name: 'font-size', value: '12px'}]},
          {label: '14px', value: [{name: 'font-size', value: '14px'}]},
          {label: '16px', value: [{name: 'font-size', value: '16px'}]},
          {label: '18px', value: [{name: 'font-size', value: '18px'}]}
        ]
      },
      {
        name: 'font-weight',
        list: [
          {label: 'bold', value: [{name: 'font-weight', value: 'bold'}]},
          {label: 'bolder', value: [{name: 'font-weight', value: 'bolder'}]}
        ]
      }
    ]
  },
  {
    title: '效果',
    rows: [
      {
        name: 'cursor',
        list: [
          {label: 'pointer', value: [{name: 'cursor', value: 'pointer'}]}
        ]
      }
    ]
  },
  {
    title: '子元素',
    rows: [
      {
        name: 'flex row',
        list: [
          {
            label: 'center',
            value: [
              {name: 'display', value: 'flex'},
              {name: 'justify-content', value: 'center'},
              {name: 'align-items', value: 'center'}
            ]
          },
          {
            label: 'between center',
            value: [
              {name: 'display', value: 'flex'},
              {name: 'justify-content', value: 'space-between'},
              {name: 'align-items', value: 'center'}
            ]
          },
          {
            label: 'around center',
            value: [
              {name: 'display', value: 'flex'},
              {name: 'justify-content', value: 'space-around'},
              {name: 'align-items', value: 'center'}
            ]
          }
        ]
      },
      {
        name: 'flex column',
        list: [
          {
            label: 'center',
            value: [
              {name: 'display', value: 'flex'},
              {name: 'flex-direction', value: 'column'},
              {name: 'justify-content', value: 'center'},
              {name: 'align-items', value: 'center'}
            ]
          },
          {
            label: 'between center',
            value: [
              {name: 'display', value: 'flex'},
              {name: 'flex-direction', value: 'column'},
              {name: 'justify-content', value: 'space-between'},
              {name: 'align-items', value: 'center'}
            ]
          },
          {
            label: 'around center',
            value: [
              {name: 'display', value: 'flex'},
              {name: 'flex-direction', value: 'column'},
              {name: 'justify-content', value: 'space-around'},
              {name: 'align-items', value: 'center'}
            ]
          }
        ]
      }
    ]
  }
]