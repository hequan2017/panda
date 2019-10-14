<template>
  <d2-container>
    <template slot="header">资产管理</template>
<el-input v-model="input" placeholder="请输入姓名"  style="width:200px;"   prefix-icon="el-icon-search" clearable></el-input>&nbsp;
<el-button type="primary" icon="el-icon-search"  @click="search"  >搜索</el-button>
<br /><br />
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      add-title="资产管理"
      :add-template="addTemplate"
      :form-options="formOptions"
      :add-rules="addRules"
      :edit-rules="addRules"
      :edit-template="editTemplate"
      :rowHandle="rowHandle"
      @row-add="handleRowAdd"
      @row-edit="handleRowEdit"
      @row-remove="handleRowRemove"
      :pagination="pagination"
      @dialog-cancel="handleDialogCancel"
       @pagination-current-change="paginationCurrentChange" >
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>
    </d2-crud>
  </d2-container>
</template>

<script>

import { TestGetList, TestCreate, TestUpdate, TestDelete } from '@api/sys.login'
export default {
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
      ],
      input: '',
      addTemplate: {
        date: {
          title: '日期',
          value: '2016-05-05'
        },
        name: {
          title: '姓名',
          value: '王小虎'
        },
        address: {
          title: '地址',
          value: '上海市普陀区金沙江路 1520 弄'
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      addRules: {
        date: [ { required: true, message: '请输入日期', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入姓名', trigger: 'blur' } ],
        address: [ { required: true, message: '请输入地址', trigger: 'blur' } ]
      },
      rowHandle: {
        columnHeader: '编辑表格',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small',
          show (index, row) {
            return true
          },
          disabled (index, row) {
            return false
          }
        },
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show (index, row) {
            return true
          },
          disabled (index, row) {
            return false
          }
        }
      },
      editTemplate: {
        date: {
          title: '日期',
          value: ''
        },
        name: {
          title: '姓名',
          value: ''
        },
        address: {
          title: '地址',
          value: ''
        },
        forbidEdit: {
          title: '禁用按钮',
          value: false,
          component: {
            show: false
          }
        },
        showEditButton: {
          title: '显示按钮',
          value: true,
          component: {
            show: false
          }
        }
      }
    }
  },
  created () {
    this.test_get_list()
  },
  methods: {
    test_get_list (parameter) {
      TestGetList(parameter).then(res => {
        console.log(res)
        this.data = res.results
        this.pagination.total = res.count
      }).catch(err => {
        console.log(`获取信息错误 ${err}`)
      })
    },

    paginationCurrentChange (currentPage) {
      TestGetList(`page=${currentPage}`).then(res => {
        console.log(res)
        this.data = res.results
        this.pagination.total = res.count
      }).catch(err => {
        console.log(`获取信息错误 ${err}`)
      })
      this.pagination.currentPage = currentPage
      this.fetchData()
    },
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    search () {
      this.test_get_list(`name=${this.input}`)
    },
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      TestCreate(row).then(res => {
      }).catch(err => {
        console.log(err)
      })
      setTimeout(() => {
        this.$message({
          message: '保存成功',
          type: 'success'
        })
        done()
        this.formOptions.saveLoading = false
        this.test_get_list()
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消',
        type: 'warning'
      })
      done()
    },
    handleRowEdit ({ index, row }, done) {
      this.formOptions.saveLoading = true
      this.addTemplate.data = row.data
      this.addTemplate.name = row.name
      this.addTemplate.address = row.address
      TestUpdate(row.id, row).then(res => {
      }).catch(err => {
        console.log(err)
      })
      setTimeout(() => {
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done()
        this.formOptions.saveLoading = false
        this.test_get_list()
      }, 300)
    },
    handleRowRemove ({ index, row }, done) {
      TestDelete(row.id).then(res => {
      }).catch(err => {
        console.log(err)
      })
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
        this.test_get_list()
      }, 300)
    }
  }
}
</script>
