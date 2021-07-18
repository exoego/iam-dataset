// a fuzzer for undocumented params

const AWS = require('aws-sdk');
const fetch = require('node-fetch');

var credentials = new AWS.SharedIniFileCredentials({profile: 'nothing'});
AWS.config.credentials = credentials;
AWS.config.region = 'us-east-1';

var long_undocumented_test_list = `
AutoScaling.GetPredictiveScalingForecast {3} - autoscaling
CloudDirectory.GetAppliedSchemaVersion {3} - clouddirectory
CloudDirectory.UpgradeAppliedSchema {3} - clouddirectory
CloudDirectory.UpgradePublishedSchema {3} - clouddirectory
CloudFormation.ActivateType {3} - cloudformation
CloudFormation.BatchDescribeTypeConfigurations {3} - cloudformation
CodePipeline.GetActionType {3} - codepipeline
CodePipeline.UpdateActionType {3} - codepipeline
CognitoIdentityServiceProvider.RevokeToken {3} - cognitoidp
DynamoDB.DescribeEndpoints {3} - dynamodb
EC2.AssociateInstanceEventWindow {3} - ec2
EC2.AssociateTrunkInterface {3} - ec2
EC2.CreateInstanceEventWindow {3} - ec2
EC2.DeleteInstanceEventWindow {3} - ec2
EC2.DescribeInstanceEventWindows {3} - ec2
EC2.DescribeTrunkInterfaceAssociations {3} - ec2
EC2.DisassociateInstanceEventWindow {3} - ec2
EC2.DisassociateTrunkInterface {3} - ec2
EC2.ModifyInstanceEventWindow {3} - ec2
ElasticBeanstalk.UpdateTagsForResource {3} - elasticbeanstalk
EMR.SetVisibleToAllUsers {3} - elasticmapreduce
Lightsail.GetBucketMetricData {3} - lightsail
S3.DeleteBucketIntelligentTieringConfiguration {3} - s3
S3.ListBucketIntelligentTieringConfigurations {3} - s3
S3.WriteGetObjectResponse {3} - s3
S3Control.CreateAccessPointForObjectLambda {3} - s3outposts
S3Control.DeleteAccessPointForObjectLambda {3} - s3outposts
S3Control.DeleteAccessPointPolicyForObjectLambda {3} - s3outposts
S3Control.DeletePublicAccessBlock {3} - s3outposts
S3Control.DescribeJob {3} - s3outposts
S3Control.GetAccessPointConfigurationForObjectLambda {3} - s3outposts
S3Control.GetAccessPointForObjectLambda {3} - s3outposts
S3Control.GetAccessPointPolicyForObjectLambda {3} - s3outposts
S3Control.GetAccessPointPolicyStatusForObjectLambda {3} - s3outposts
S3Control.GetPublicAccessBlock {3} - s3outposts
S3Control.ListAccessPointsForObjectLambda {3} - s3outposts
S3Control.ListJobs {3} - s3outposts
S3Control.PutAccessPointConfigurationForObjectLambda {3} - s3outposts
S3Control.PutAccessPointPolicyForObjectLambda {3} - s3outposts
S3Control.PutBucketLifecycleConfiguration {3} - s3outposts
S3Control.PutPublicAccessBlock {3} - s3outposts
SSM.UnlabelParameterVersion {3} - ssm
LexModelBuildingService.StartMigration {3} - lex
Glue.UpdateColumnStatisticsForPartition {3} - glue
Glue.UpdateColumnStatisticsForTable {3} - glue
SageMaker.SendPipelineExecutionStepFailure {3} - sagemaker
SageMaker.SendPipelineExecutionStepSuccess {3} - sagemaker
ServiceDiscovery.UpdateHttpNamespace {3} - servicediscovery
QuickSight.CreateFolderMembership {3} - quicksight
QuickSight.DeleteFolder {3} - quicksight
QuickSight.DeleteFolderMembership {3} - quicksight
QuickSight.DescribeFolder {3} - quicksight
QuickSight.DescribeFolderPermissions {3} - quicksight
QuickSight.DescribeFolderResolvedPermissions {3} - quicksight
QuickSight.ListFolderMembers {3} - quicksight
QuickSight.UpdateFolder {3} - quicksight
QuickSight.UpdateFolderPermissions {3} - quicksight
DataSync.UpdateLocationNfs {3} - datasync
DataSync.UpdateLocationObjectStorage {3} - datasync
DataSync.UpdateLocationSmb {3} - datasync
KinesisAnalyticsV2.UpdateApplicationMaintenanceConfiguration {3} - kinesisanalytics
ApiGatewayManagementApi.DeleteConnection {3} - apigateway
ApiGatewayManagementApi.GetConnection {3} - apigateway
ApiGatewayManagementApi.PostToConnection {3} - apigateway
IoTEvents.StartDetectorModelAnalysis {3} - iotevents
WorkMailMessageFlow.PutRawMessageContent {3} - workmailmessageflow
SSO.GetRoleCredentials {3} - sso
SSO.ListAccountRoles {3} - sso
SSO.ListAccounts {3} - sso
SSO.Logout {3} - sso
SSOOIDC.CreateToken {3} - ssodirectory
SSOOIDC.RegisterClient {3} - ssodirectory
SSOOIDC.StartDeviceAuthorization {3} - ssodirectory
ConnectParticipant.CompleteAttachmentUpload {3} - executeapi
ConnectParticipant.CreateParticipantConnection {3} - executeapi
ConnectParticipant.DisconnectParticipant {3} - executeapi
ConnectParticipant.GetAttachment {3} - executeapi
ConnectParticipant.GetTranscript {3} - executeapi
ConnectParticipant.SendEvent {3} - executeapi
ConnectParticipant.SendMessage {3} - executeapi
ConnectParticipant.StartAttachmentUpload {3} - executeapi
IoTSiteWise.GetInterpolatedAssetPropertyValues {3} - iotsitewise
IoTSiteWise.PutStorageConfiguration {3} - iotsitewise
LexModelsV2.CreateResourcePolicyStatement {3} - lex
LexModelsV2.DeleteResourcePolicyStatement {3} - lex
LexRuntimeV2.RecognizeUtterance {3} - lex
EMR.AddInstanceFleet {1}
EMR.AddInstanceGroups {1}
EMR.ModifyInstanceGroups {1}
CostExplorer.CreateAnomalyMonitor {1}
CostExplorer.CreateCostCategoryDefinition {1}
CostExplorer.UpdateCostCategoryDefinition {1}
SSM.GetInventory {1}
SSM.GetOpsSummary {1}
CostExplorer.GetCostAndUsage {1}
CostExplorer.GetCostAndUsageWithResources {1}
CostExplorer.GetCostCategories {1}
CostExplorer.GetCostForecast {1}
CostExplorer.GetDimensionValues {1}
CostExplorer.GetReservationCoverage {1}
CostExplorer.GetReservationPurchaseRecommendation {1}
CostExplorer.GetReservationUtilization {1}
CostExplorer.GetRightsizingRecommendation {1}
CostExplorer.GetSavingsPlansCoverage {1}
CostExplorer.GetSavingsPlansPurchaseRecommendation {1}
CostExplorer.GetSavingsPlansUtilization {1}
CostExplorer.GetSavingsPlansUtilizationDetails {1}
CostExplorer.GetTags {1}
CostExplorer.GetUsageForecast {1}
SageMaker.Search {1}
`;

var found_permissions = [];

function transformArn(arn) {
    return arn
        .replace(/PN/g, "$\{")
        .replace(/XX/g, "}")
        .replace(/pn/g, "$\{")
        .replace(/xx/g, "}")
        .replace(/774857101424/g, "${Account}")
        .replace(/us-east-1/g, "${Region}")
        .replace(/arn:aws/g, "arn:${Partition}");
}

async function go() {
    var known_permissions = {};
    var iamdefdata = await fetch('https://raw.githubusercontent.com/iann0036/iam-dataset/main/iam_definition.json');
    iamdef = await iamdefdata.json();

    for (var iamdefitem of iamdef) {
        for (var priv of iamdefitem.privileges) {
            known_permissions[iamdefitem.prefix+":"+priv.privilege] = (priv.access_level == "Unknown");
        }
    }
    
    for (let test_item of long_undocumented_test_list.split("\n")) {
        test_item = test_item.split(" ")[0];
        if (test_item != "") {
            let split_test_item = test_item.split(".");
            let svc = new AWS[split_test_item[0]]({});
            let method = split_test_item[1][0].toLowerCase() + split_test_item[1].substr(1);

            let complete = false;
            let params = {};
            let iterations = 0;
            let last_param = null;

            while (!complete) {
                try {
                    console.log("--\n" + method);
                    console.log(params);
                    await svc[method].call(svc, params).promise();
                    complete = true;
                } catch (err) {
                    if (err.message) {
                        if (err.message.includes("not authorized to perform: ")) {
                            console.log(err.message);
                            let match = err.message.match(/not authorized to perform: ([a-zA-Z0-9-:]+)(?: on resource: (.+))?/);
                            let permission = match[1];
                            let resource = match[2];

                            found_permissions.push({
                                'permission': permission,
                                'resource': resource || null,
                                'service': split_test_item[0],
                                'method': split_test_item[1]
                            });
                            complete = true;
                        } else {
                            if (err.message.includes("Missing required key '")) {
                                let paramname = err.message.match(/Missing required key '(.+)'/)[1];
                                params[paramname] = "PN"+paramname+"XX";
                                if (paramname.toLowerCase().includes("accountid")) {
                                    params[paramname] = "774857101424";
                                }
                                last_param = paramname;
                            } else if (err.message.includes(" to be an Array")) {
                                params[last_param] = [];
                            } else if (err.message.includes(" to be a structure")) {
                                params[last_param] = {};
                            } else if (err.message.includes(" to be a number")) {
                                params[last_param] = 1;
                            } else if (err.message.includes(" to be a boolean")) {
                                params[last_param] = false;
                            } else {
                                console.log(err.message);
                                complete = true;
                            }
                        }
                    } else {
                        complete = true;
                    }
                }
                iterations += 1;
                if (iterations > 20) {
                    complete = true;
                }
            }
        }
    }

    console.log(found_permissions);

    let res = {};
    for (let item of found_permissions) {
        if (!Object.keys(known_permissions).includes(item['permission'])) {
            res[item['service'] + "." + item['method']] = [{
                "action": item['permission'],
                "undocumented": true
            }];
            if (item['resource']) {
                res[item['service'] + "." + item['method']][0]['arn_override'] = {
                    "template": transformArn(item['resource'])
                };
            }
        } else {
            if (!known_permissions[item['permission']]) {
                console.log("Invalid hit: " + item['permission']);
            } else {
                res[item['service'] + "." + item['method']] = [{
                    "action": item['permission'],
                    "undocumented": true
                }];
                if (item['resource']) {
                    res[item['service'] + "." + item['method']][0]['arn_override'] = {
                        "template": transformArn(item['resource'])
                    };
                }
            }
        }
    }

    var mapdata = await fetch('https://raw.githubusercontent.com/iann0036/iam-dataset/main/map.json');
    var map = await mapdata.json();

    for (let reskey of Object.keys(res)) {
        if (Object.keys(map['sdk_method_iam_mappings']).includes(reskey)) {
            delete res[reskey];
        }
    }

    console.log(JSON.stringify(res, null, 4));
}

go();
