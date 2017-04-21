/**
 * Created by xl on 2017/4/7.
 */
$(function(){
    $(".tree").treemenu({delay:300}).openActive();
});
function ToCategory() {
    $("#iframe1").attr("src","Category.html");
}
function ToAttributes() {
    $("#iframe1").attr("src","Attributes.html");
}

function ToSubAttributes() {
    $("#iframe1").attr("src","SubAttributes.html");
}
function ToMetrics() {
    $("#iframe1").attr("src","Metrics.html");
}
function ToEvaluationInfoSet() {

    $("#iframe1").attr("src","EvaluationInfoSet.html");
}

function CreateNumber() {
    $("#labelNumber").html("00000001");
}
function ToIndustryCategory() {
    $("#iframe1").attr("src","IndustryCategory.html");
}
function ToSubIndustryCategory() {
    $("#iframe1").attr("src","SubIndustryCategory.html");
}

function ToDataSource() {
    $("#iframe1").attr("src","DataSource.html");
}

function ToLocalDataSource() {
    $("#iframe1").attr("src","LocalDataSource.html");
}

function ToRemoteDataSource() {
    $("#iframe1").attr("src","RemoteDataSource.html");
}

function ToCreateTemplate() {
    $("#iframe1").attr("src","CreateTemplate.html");
}

function ToModifyTemplate() {
    $("#iframe1").attr("src","ModifyTemplate.html");
}

function ToDataBinding() {
    $("#iframe1").attr("src","DataBinding.html");
}

function ToWeightSetting() {
    $("#iframe1").attr("src","WeightSetting.html");
}
function ToSampling() {
    $("#iframe1").attr("src","Sampling.html");
}

function ToSamplingFunction() {
    $("#iframe1").attr("src","SamplingFunction.html");
}

function SampleModal() {
    var objselect = document.getElementById("select1");
    if (objselect.options[objselect.selectedIndex].value!="请选择") {
        $("#myModalSelect").find("#myModalLabel1").html(objselect.options[objselect.selectedIndex].value + "参数设定");
        $("#myModalSelect").modal();
    }
    else
    {

    }
}

function ToMetricModal(row) {
    if(row.name =="完整性")
    {
        $("#MyMetric").find("#Modaliframe4").attr("src","ChooseMetrics.html");
    }
    else if(row.name =="丰富性") {
        $("#MyMetric").find("#Modaliframe4").attr("src","ChooseMetrics.html");
    }
    else if(row.name =="规范性")
    {
        $("#MyMetric").find("#Modaliframe4").attr("src","ChooseMetrics1.html");
    }
    else if (row.name =="一致性")
    {
        $("#MyMetric").find("#Modaliframe4").attr("src","ChooseMetrics.html");
    }
    else
    {
        alert("hhhhh");
    }
    $("#MyMetric").modal();
}

function InsertDiv() {
    $("#Myform").append($("#clone1").clone());

}

function InsertDiv1() {
    $("#form1").append($("#div1").clone());

}

function ToMethods() {
    $("#iframe1").attr("src","Methods.html")

}

function ToChooseMetricsAuto() {
    $("#iframe1").attr("src","ChooseMetricAuto.html")
}

function ToChooseMetricsManual() {
    $("#iframe1").attr("src","ChooseMetricManual.html")
}

function ToChooseEvaluationPerson() {
    $("#iframe1").attr("src","ChooseEvaluationPerson.html")
}

function ToManualEvaluationResult() {
    $("#iframe1").attr("src","ManualEvaluationResult.html")
}

function ToPersonManagment() {
    $("#iframe1").attr("src","PersonManagment.html")
}

$("#mytab").bootstrapTable({
    onClickRow: function (row) {
        console.log(row.id);
        console.log(row.id);
        if (row.state==true) {
            ToMetricModal(row);
        }
        else
        {
            alert("取消");

        }
    },
})
